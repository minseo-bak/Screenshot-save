//=============================================================================
// RPG Maker MZ - Alternative Save Screen
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Alternative save/load screen layout.
 * @author Yoji Ojima
 *
 * @help AltSaveScreen.js
 *
 * This plugin changes the layout of the save/load screen.
 * It puts the file list on the top and the details on the bottom.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc セーブ／ロード画面のレイアウトを変更します。
 * @author Yoji Ojima
 *
 * @help AltSaveScreen.js
 *
 * このプラグインは、セーブ／ロード画面のレイアウトを変更します。
 * ファイル一覧を上側に、詳細を下側に配置します。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Scene_File_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function() {
        _Scene_File_create.apply(this, arguments);
        
        // statusWindow 추가
        this._listWindow.height = this._listWindow.fittingHeight(3);
        const x = 0;
        const y = this._listWindow.y + this._listWindow.height;
        const width = Graphics.boxWidth;
        const height = Graphics.boxHeight - y;
        const rect = new Rectangle(x, y, width, height);
        const statusWindow = new Window_SavefileStatus(rect);
        this._listWindow.mzkp_statusWindow = statusWindow;
        this.addWindow(statusWindow);

        // 위치 교환
        const yListWindow = this._listWindow.y;
        this._listWindow.y = this._listWindow.mzkp_statusWindow.y;
        this._listWindow.mzkp_statusWindow.y = yListWindow;

        this._listWindow.y = this._listWindow.y;


    };


    //아래로 스크린샷 캡쳐하는 스크립트 
    const _dataManager_saveGame = DataManager.saveGame;
    DataManager.saveGame = function(savefileId) {
    const result = _dataManager_saveGame.call(this, savefileId);

    const bitmap = this.makeSavefileBitmap();
    if (bitmap){
        const snapUrl = bitmap.toDataURL();
        this.saveThumbnail(savefileId, snapUrl);
    }

    return result;
};
    //위로 스크린샷 캡쳐하는 스크립트 

    //아래로 스크린샷로드 스크립트
    const _dataManager_loadAllSavefileImages = DataManager.loadAllSavefileImages;
    DataManager.loadAllSavefileImages = function() {
        _dataManager_loadAllSavefileImages.call(this);
        for (let id = 0; id < DataManager.maxSavefiles(); id++) {
            this.loadThumbnail(id);
        }
    };

    //위로 스크린샷 로드 스크립트 

    //로드섬네일

    DataManager.loadThumbnail = function(id) {
        if (!this._snapUrls[id]) {
            const filename = this.makeThumbnailFilename(id);
            if (StorageManager.exists(filename)) {
                this._snapUrls[id] = StorageManager.loadObject(filename).then(url => {
                    this._snapUrls[id] = url;
                    return 0;
                });
            }
        }
        return this._snapUrls[id];
    };

    // 맨아래에하나더잇어 



    const _Scene_File_start = Scene_File.prototype.start;
    Scene_File.prototype.start = function() {
        _Scene_File_start.apply(this, arguments);
        this._listWindow.ensureCursorVisible();
        this._listWindow.callUpdateHelp();
    };

    Window_SavefileList.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_SavefileList.prototype.maxCols = function() {
        return 4;
    };

    Window_SavefileList.prototype.itemHeight = function() {
        return this.lineHeight() * 2 + 16;
    };

    const _Window_SavefileList_callUpdateHelp =
        Window_SavefileList.prototype.callUpdateHelp;
    Window_SavefileList.prototype.callUpdateHelp = function() {
        _Window_SavefileList_callUpdateHelp.apply(this, arguments);
        if (this.active && this.mzkp_statusWindow) {
            this.mzkp_statusWindow.setSavefileId(this.savefileId());
        }
    };

    function Window_SavefileStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_SavefileStatus.prototype = Object.create(Window_Base.prototype);
    Window_SavefileStatus.prototype.constructor = Window_SavefileStatus;

    Window_SavefileStatus.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this._savefileId = 1;
    };

    Window_SavefileStatus.prototype.setSavefileId = function(id) {
        this._savefileId = id;
        this.refresh();
    };

    Window_SavefileStatus.prototype.refresh = function() {
        const info = DataManager.savefileInfo(this._savefileId);
        const rect = this.contents.rect;
        this.contents.clear();
        this.resetTextColor();
        this.drawTitle(this._savefileId, rect.x, rect.y);
        if (info) {
            this.drawContents(info, rect);
        }
    };

    Window_SavefileStatus.prototype.drawTitle = function(savefileId, x, y) {
        if (savefileId === 0) {
            this.drawText(TextManager.autosave, x, y, 180);
        } else {
            this.drawText(TextManager.file + " " + savefileId, x, y, 180);
        }
    };

    // Window_SavefileStatus.prototype.drawContents = function(info, rect) {
    //     const bottom = rect.y + rect.height;
    //     const playtimeY = bottom - this.lineHeight();
    //     this.drawText(info.title, rect.x + 192, rect.y, rect.width - 192);
    //     this.drawPartyfaces(info.faces, rect.x, bottom - 144);
    //     this.drawText(info.playtime, rect.x, playtimeY, rect.width, "right");
    //     this.drawSnappedImage();//id, valid, thumbnail_X, thumbnail_Y); //??진심?
    // };

    
    Window_SavefileStatus.prototype.drawContents = function(info, rect) {
        const bottom = rect.y + rect.height;
        const playtimeY = bottom - this.lineHeight();
        this.drawText(info.title, rect.x + 192, rect.y, rect.width - 192);
        //this.drawPartyfaces(info.faces, rect.x, bottom - 144);
        this.drawText(info.playtime, rect.x, playtimeY, rect.width, "right");
        this.drawSnappedImage();
    };
    
    
 //스크린샷 출력하는곳
//     Window_SavefileStatus.prototype.drawSnappedImage = function()//savefileId, valid, x, y) 
//     {
//     const snapUrl = DataManager.getThumbnail(this._savefileId); //+this._
//     if (showThumbnail && snapUrl) {
//         const bitmap = ImageManager.loadThumbnailFromUrl(snapUrl);
//         this.changePaintOpacity(true);
//         bitmap.addLoadListener(function() {
//             //this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y);
//             this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, thumbnail_X, thumbnail_Y);
//         }.bind(this));
//     }
// };

Window_SavefileStatus.prototype.drawSnappedImage = function() {
    const snapUrl = DataManager.getThumbnail(this._savefileId);
    if (showThumbnail && snapUrl) {
        const bitmap = ImageManager.loadThumbnailFromUrl(snapUrl);
        this.changePaintOpacity(true);
        bitmap.addLoadListener(function() {
            this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, thumbnail_X, thumbnail_Y);
        }.bind(this));
    }
};
//스크린샷 출력이야  

    

// Window_SavefileStatus.prototype.drawPartyfaces = function(faces, x, y) {
//     if (faces) {
//         for (let i = 0; i < faces.length; i++) {
//             const data = faces[i];
//             this.drawFace(data[0], data[1], x + i * 150, y);
//         }
//     }
// };
//로드섬네일추가

ImageManager.loadThumbnailFromUrl = function(url) {
    const cache = url.includes("/system/") ? this._system : this._cache;
    if (!cache[url]) {
        cache[url] = Bitmap.loadThumbnail(url);
    }
    return cache[url];
}

Bitmap.loadThumbnail = function(url) {
    const bitmap = Object.create(Bitmap.prototype);
    bitmap.initialize();
    bitmap._url = url;
    bitmap.isThumbnail = true;
    bitmap._startLoading();
    return bitmap;
};

Bitmap.prototype._startLoading = function() {
    this._image = new Image();
    this._image.onload = this._onLoad.bind(this);
    this._image.onerror = this._onError.bind(this);
    this._destroyCanvas();
    this._loadingState = "loading";
    if (Utils.hasEncryptedImages() && !this.isThumbnail) {
        this._startDecrypting();
    } else {
        this._image.src = this._url;
        if (this._image.width > 0) {
            this._image.onload = null;
            this._onLoad();
        }
    }
};


// 로드비트맵섬네일관리끝 


})();
