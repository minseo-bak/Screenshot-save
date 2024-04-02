/*:
  * @target MZ
  * @plugindesc 스크린 샷이있는 저장 플러그인
  * @author GrayOgre
  * @url https://grayogre.info/rmmz/plugin/index.html
  * @help
  *
  *이 플러그인은 하위 화면에 스크린 샷을 포함한 자세한 정보를 표시합니다.
  * 저장/로드 화면을 제공합니다.
  *
  * 이 플러그인에는 플러그인 명령이 없습니다.
  *
  * 제약사항
  * 오토 세이브시의 스크린 샷에는 대응하고 있지 않습니다.
  *
  * 이식 소스 플러그인
  * sai_Scenefile.js (sairi님작)
  *
  * Copyright (c) 2021-2023 GrayOgre
  * Released under the MIT license
  * https://opensource.org/licenses/mit-license.php
  *
  * Version 1.0.5
  *
  * @param bgPicture
  * @text 배경 이미지
  * @desc 배경 이미지의 파일 이름입니다. (확장자 없음, PNG 파일)
  * @type file
  * @default
  * @param fontSize
  * @text 글꼴 크기
  * @desc 표시용 글꼴 사이스
  * @type number
  * @default 20
  * @param totalHeight
  * @text 높이(전체)
  * @desc 전체 화면의 높이입니다.
  * @type number
  * @default 550
  * @param listWidth
  * @text 선택 윈도우 폭
  * @desc 선택 창의 너비입니다.
  * @type number
  * @default 350
  * @param statusWidth
  * @text 상태 창 폭
  * @desc 상태 창의 너비입니다.
  * @type number
  * @default 400
  * @param saveListCols
  * @text 저장 목록의 열 수
  * @desc 세이브리스트 옆의 열 수
  * @type number
  * @default 2
  * @param saveSlotMax
  * @text 저장 슬롯의 최대 수
  * @desc 저장할 수 있는 최대 영역 수
  * @type number
  * @default 20
  * @param saveListVisibleRows
  * @text 세이브리스트 표시 행 수
  * @desc 저장 목록에 표시할 행 수
  * @type number
  * @default 10
  * @param ssRatio
  * @text 스크린샷 축소율
  * @desc 표시할 스크린샷 축소율(%)
  * @type number
  * @default 30
  * @param windowOpacity
  * @text 윈도우 투명도
  * @desc 표시할 창의 투명도
  * @type number
  * @default 0
  * @param showSaveTitle
  * @text 저장 이름 표시
  * @desc true인 경우 저장 이름 표시
  * @type boolean
  * @default true
  * @param saveTitle_X
  * @text 저장 이름 X 좌표
  * @dexc 저장 이름 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param saveTitle_Y
  * @text 저장 이름 Y 좌표
  * @dexc 저장 이름 표시 위치의 Y 좌표
  * @type number
  * @default 0
  * @param showThumbnail
  * @text 썸네일 표시
  * @desc true인 경우 썸네일 표시
  * @type boolean
  * @default true
  * @param thumbnail_X
  * @text 썸네일 X 좌표
  * @desc 썸네일 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param thumbnail_Y
  * @text 썸네일 Y 좌표
  * @desc 썸네일 표시 위치의 Y 좌표
  * @type number
  * @default 40
  * @param showSaveTime
  * @text 저장 날짜 및 시간 표시
  * @desc true의 경우, 저장 일시를 표시한다
  * @type boolean
  * @default true
  * @param saveTime_X
  * @text 저장 날짜/시간 X 좌표
  * @desc 저장 날짜 및 시간 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param saveTime_Y
  * @text 저장 일시 Y 좌표
  * @desc 저장 날짜 및 시간 표시 위치의 Y 좌표
  * @type number
  * @default 230
  * @param showLocation
  * @text 맵 이름 표시
  * @desc true인 경우 맵 이름 표시
  * @type boolean
  * @default true
  * @param locationTitle
  * @text 지도 이름 제목
  * @desc 맵 이름 앞에 표시할 제목
  * @type string
  * @default 기록 장소:
  * @param location_X
  * @text 맵 이름 X 좌표
  * @desc 맵 이름 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param location_Y
  * @text 맵 이름 Y 좌표
  * @desc 맵 이름 표시 위치의 Y 좌표
  * @type number
  * @default 260
  * @param showPlayTime
  * @text 재생 시간 표시
  * @desc true인 경우 플레이 시간 표시
  * @type boolean
  * @default true
  * @param playTimeTitle
  * @text 재생 시간 제목
  * @desc 재생 시간 앞에 표시되는 제목
  * @type string
  * @default 재생 시간:
  * @param playTime_X
  * @text 재생 시간 X 좌표
  * @desc 재생 시간 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param playTime_Y
  * @text 재생 시간 Y 좌표
  * @desc 재생 시간 표시 위치의 Y 좌표
  * @type number
  * @default 290
  * @param showMoney
  * @text 소지금 표시
  * @desc true인 경우 소지금 표시
  * @type boolean
  * @default true
  * @param moneyTitle
  * @text 소지금 제목
  * @desc 소지금 앞에 표시 할 제목
  * @type string
  * @default 소지금 :
  * @param money_X
  * @text 소지금 X 좌표
  * @desc 소지금 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param money_Y
  * @text 소지금 Y 좌표
  * @desc 소지금 표시 위치의 Y 좌표
  * @type number
  * @default 320
  * @param showLevel
  * @text 레벨 표시
  * @desc true인 경우 레벨 표시
  * @type boolean
  * @default true
  * @param level_X
  * @text 레벨 X 좌표
  * @desc 레벨 표시 위치의 X 좌표
  * @type number
  * @default 0
  * @param level_Y
  * @text 레벨 Y 좌표
  * @desc 레벨 표시 위치의 Y 좌표
  * @type number
  * @default 350
  * @param showParty
  * @text 파티 디스플레이
  * @desc true인 경우 파티원 보기
  * @type boolean
  * @default true
  * @param party_X
  * @text 파티 X 좌표
  * @desc 파티원 표시의 X 좌표
  * @type number
  * @default 80
  * @param party_Y
  * @text 파티 Y 좌표
  * @desc 파티원 표시의 Y 좌표
  * @type number
  * @default 400
  * @param showPageButton
  * @text 페이지 이송 버튼 표시
  * @desc true의 경우, 세이브 리스트의 페이지 보내기 버튼을 표시한다
  * @type boolean
  * @default true
  */

(() => {
    'use strict';

    const pluginName = document.currentScript.src.replace(/^.*\/(.*).js$/, function() {
        return arguments[1];
    });
    const parameters = PluginManager.parameters(pluginName);

    const bgPicture = parameters.bgPicture;
    const fontSize = Number(parameters.fontSize);
    const totalHeight = Number(parameters.totalHeight);
    const listWidth = Number(parameters.listWidth);
    const statusWidth = Number(parameters.statusWidth);
    const saveListCols = Number(parameters.saveListCols);
    const saveSlotMax = Number(parameters.saveSlotMax);
    const saveListVisibleRows = Number(parameters.saveListVisibleRows);
    const ssRatio = Number(parameters.ssRatio);
    const windowOpacity = Number(parameters.windowOpacity);
    const showSaveTitle = parameters.showSaveTitle === 'true';
    const saveTitle_X = Number(parameters.saveTitle_X);
    const saveTitle_Y = Number(parameters.saveTitle_Y);
    const showThumbnail = parameters.showThumbnail === 'true';
    const thumbnail_X = Number(parameters.thumbnail_X);
    const thumbnail_Y = Number(parameters.thumbnail_Y);
    const showSaveTime = parameters.showSaveTime === 'true';
    const saveTime_X = Number(parameters.saveTime_X);
    const saveTime_Y = Number(parameters.saveTime_Y);
    const showLocation = parameters.showLocation === 'true';
    const locationTitle = parameters.locationTitle;
    const location_X = Number(parameters.location_X);
    const location_Y = Number(parameters.location_Y);
    const showPlayTime = parameters.showPlayTime === 'true';
    const playTimeTitle = parameters.playTimeTitle;
    const playTime_X = Number(parameters.playTime_X);
    const playTime_Y = Number(parameters.playTime_Y);
    const showMoney = parameters.showMoney === 'true';
    const moneyTitle = parameters.moneyTitle;
    const money_X = Number(parameters.money_X);
    const money_Y = Number(parameters.money_Y);
    const showLevel = parameters.showLevel === 'true';
    const level_X = Number(parameters.level_X);
    const level_Y = Number(parameters.level_Y);
    const showParty = parameters.showParty === 'true';
    const party_X = Number(parameters.party_X);
    const party_Y = Number(parameters.party_Y);
    const showPageButton = parameters.showPageButton === 'true';

    //Bitmap
    Bitmap.prototype.toDataURL = function() {
        // jpegとPNGサイズが小さくなる方を返す
        const png = this._canvas.toDataURL('image/png');
        const jpeg = this._canvas.toDataURL('image/jpeg');
        return (png.length < jpeg.length) ? png : jpeg;
    };

    // DataManager
    DataManager._snapUrls = {};

    DataManager.maxSavefiles = function() {
        return saveSlotMax;
    };

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

    const _dataManager_loadAllSavefileImages = DataManager.loadAllSavefileImages;
    DataManager.loadAllSavefileImages = function() {
        _dataManager_loadAllSavefileImages.call(this);
        for (let id = 0; id < DataManager.maxSavefiles(); id++) {
            this.loadThumbnail(id);
        }
    };

    DataManager.getThumbnail = function(savefileId) {
        return this._snapUrls[savefileId];
    };

    const _dataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function(){
        const info = _dataManager_makeSavefileInfo.call(this);
        info.location = $dataMap.displayName !== "" ? $dataMap.displayName : $dataMapInfos[$gameMap.mapId()].name;
        info.level = $gameParty.exists() ? $gameParty.members()[0].level : null;
        info.gold = $gameParty.gold();
        info.map_id = $gameMap.mapId();
        
        const savetime = new Date();
        const dateOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        };
        info.savetime = savetime.toLocaleDateString("ja-JP",dateOptions);
    
        return info;
    };
    
    //セーブファイル用のビットマップを作成
    DataManager.makeSavefileBitmap = function(){
        const bitmap = $gameTemp.getSavefileBitmap();
        if (!bitmap){
            return null;
        }
        const scale = ssRatio / 100;
        const newBitmap = new Bitmap(bitmap.width * scale, bitmap.height * scale);
        newBitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, newBitmap.width, newBitmap.height);
        return newBitmap;
    };

    DataManager.makeThumbnailFilename = function(id) {
        return "thumb%1".format(id);
    };

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

    DataManager.saveThumbnail = function(id, url) {
        if (this._snapUrls[id] !== url) {
            this._snapUrls[id] = url;
            const filename = this.makeThumbnailFilename(id);
            StorageManager.saveObject(filename, url);
        }
    };

    // SceneManager
    SceneManager.snapForBackground = function() {
        this._backgroundBitmap = this.snap();　//モーションブラーを取り外す
    
    };

    // Game_Temp
    const _game_temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function() {
        _game_temp_initialize.call(this);
        this._savefileBitmap = null;
    };

    Game_Temp.prototype.setSavefileBitmap = function(bitmap){
        this._savefileBitmap = bitmap;
    };
    
    Game_Temp.prototype.getSavefileBitmap = function() {
        if (this._savefileBitmap) {
            return this._savefileBitmap;
        } else {
            return SceneManager.backgroundBitmap();
        }
    };

    // Scene_Map
    const _scene_map_callMenu = Scene_Map.prototype.callMenu;
    Scene_Map.prototype.callMenu = function() {
        $gameTemp.setSavefileBitmap(SceneManager.snap());
        _scene_map_callMenu.call(this);
    };

    // Scene_File
    const _scene_file_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function() {
        _scene_file_create.call(this);
        this.createControlWindow();
        this.createStatusWindow();
        this.createControlButtons();
        // セーブ画面全てのウインドウを透明にする
        this._statusWindow.opacity = windowOpacity;
        this._helpWindow.opacity = windowOpacity;
        this._listWindow.opacity = windowOpacity;
        this._controlWindow.opacity = windowOpacity;
        this._listWindow.statusWindow = this._statusWindow;
        this._statusWindow.listWindow = this._listWindow;
    };

    Scene_File.prototype.createControlWindow = function() {
        const rect = this.controlWindowRect();
        this._controlWindow = new Window_SaveListControl(rect);
        this.addWindow(this._controlWindow);
    };

    Scene_File.prototype.createStatusWindow = function() {
        const rect = this.statusWindowRect();
        this._statusWindow = new Window_SaveFileStatus(rect);
        this._statusWindow.setMode(this.mode());
        this.addWindow(this._statusWindow);
    };

    Scene_File.prototype.listWindowRect = function() {
        const ww = listWidth;
        const wh = (showPageButton) ? totalHeight - this.calcWindowHeight(1, true) - 8 : totalHeight;
        const wx = Math.floor((Graphics.boxWidth - listWidth - statusWidth) / 2);
        const wy = this.mainAreaTop();
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_File.prototype.helpWindowRect = function() {
        const rect = this.listWindowRect();
        const ww = statusWidth;
        const wh = this.calcWindowHeight(1, true);
        const wx = rect.x + rect.width;
        const wy = this.mainAreaTop();
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_File.prototype.controlWindowRect = function() {
        const rect = this.listWindowRect();
        const ww = rect.width;
        const wh = totalHeight - rect.height;
        const wx = rect.x;
        const wy = rect.y + rect.height;
        return new Rectangle(wx, wy, ww, wh);
    };


    //////////////////////////
    Scene_File.prototype.statusWindowRect = function() {
        const rect = this.helpWindowRect();
        const ww = statusWidth;
        const wh = totalHeight - rect.height;
        const wx = rect.x;
        const wy = rect.y + rect.height;
        return new Rectangle(wx, wy, ww, wh);
    };
    //////////////////////////

    Scene_File.prototype.createControlButtons = function() {
        this._pageUpButton = new Sprite_Button("pageup");
        this._pageUpButton.x = 4;
        this._pageUpButton.y = 0;
        this._controlWindow.addButton(this._pageUpButton);
        this._pageDownButton = new Sprite_Button("pagedown");
        this._pageDownButton.x = this._controlWindow.width - this._pageDownButton.width * 2 + 16;
        this._pageDownButton.y = 0;
        this._controlWindow.addButton(this._pageDownButton);
    };

    const _scene_file_start = Scene_File.prototype.start;
    Scene_File.prototype.start = function() {
        _scene_file_start.call(this);
        this._listWindow.ensureCursorVisible();
        this._listWindow.callUpdateHelp();
    };

    const _scene_file_createBackground = Scene_File.prototype.createBackground;
    Scene_File.prototype.createBackground = function(){
        if(bgPicture){
            Scene_MenuBase.prototype.createBackground.call(this);
            this._backgroundSprite = new Sprite();
            const url = bgPicture + '.png';
            this._backgroundSprite.bitmap = ImageManager.loadBitmapFromUrl(url);
            this.addChild(this._backgroundSprite);
        } else {
            _scene_file_createBackground.call(this);
        }
    };

    // Window_Base
    Window_Base.prototype.setFontSize = function(size) {
        this.contents.fontSize = size;
    };

    // Window_SaveFileList
    const _window_savefilelist_initialize = Window_SavefileList.prototype.initialize;
    Window_SavefileList.prototype.initialize = function(rect) {
        _window_savefilelist_initialize.call(this, rect);
        this.setFontSize(fontSize);
    };

    Window_SavefileList.prototype.numVisibleRows = function() {
        return saveListVisibleRows;
    };

    Window_SavefileList.prototype.maxCols = function() {
        return saveListCols;
    };

    const _window_saveFileList_callUpdateHelp = Window_SavefileList.prototype.callUpdateHelp;
    Window_SavefileList.prototype.callUpdateHelp = function() {
        _window_saveFileList_callUpdateHelp.call(this);
        if (this.active && this.statusWindow) {
            this.statusWindow.setId(this.indexToSavefileId(this.index()));
        }
    };

    Window_SavefileList.prototype.drawItem = function(index) {
        const savefileId = this.indexToSavefileId(index);
        const info = DataManager.savefileInfo(savefileId);
        const rect = this.itemRectWithPadding(index);
        this.resetTextColor();
        this.changePaintOpacity(this.isEnabled(savefileId));
        this.drawTitle(savefileId, rect.x, rect.y + 4);
    };

    // Window_Help
    const _window_help_resetFontSettings = Window_Help.prototype.resetFontSettings;
    Window_Help.prototype.resetFontSettings = function() {
        _window_help_resetFontSettings.call(this);
        if (SceneManager._scene instanceof Scene_File) {
            this.setFontSize(fontSize);
        }
    }

    // Window_SaveListControl (ボタン置き場)
    function Window_SaveListControl() {
        this.initialize(...arguments);
    }
    
    Window_SaveListControl.prototype = Object.create(Window_Base.prototype);
    Window_SaveListControl.prototype.constructor = Window_SaveListControl;

    Window_SaveListControl.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
    };

    Window_SaveListControl.prototype.addButton = function(button) {
        this.addInnerChild(button);
    };

    // Window_SaveFileStatus (セーブファイル詳細)

    Window_SaveFileStatus.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this.setFontSize(fontSize);
        this._id = 1;
    };

    Window_SaveFileStatus.prototype.setMode = function(mode) {
        this._mode = mode;
    };

    Window_SaveFileStatus.prototype.setId = function(id) {
        this._id = id;
        this.refresh();
    };

    Window_SaveFileStatus.prototype.refresh = function() {
        this.contents.clear();
        const id = this._id;
        const info = DataManager.savefileInfo(id);
        const valid = DataManager.savefileExists(id);
        this.drawSaveTitle(id, saveTitle_X, saveTitle_Y);
        
    };

    function Window_SaveFileStatus() {
        this.initialize(...arguments);
        
        const id = this._id;
        const info = DataManager.savefileInfo(id);
        const valid = DataManager.savefileExists(id);
        if (info){
            this.drawSaveTime(info, valid, saveTime_X, saveTime_Y);
            this.drawLocation(info, valid, location_X, location_Y);
            this.drawPlayTime(info, valid, playTime_X, playTime_Y);
            this.drawMoney(info, valid, money_X, money_Y);
            this.drawLevel(info, valid, level_X, level_Y);
            this.drawPartyCharacters(info, valid, party_X, party_Y);
            this.drawSnappedImage(id, valid, thumbnail_X, thumbnail_Y);
        }
    }

    Window_SaveFileStatus.prototype = Object.create(Window_Base.prototype);
    Window_SaveFileStatus.prototype.constructor = Window_SaveFileStatus;

    


    Window_SaveFileStatus.prototype.drawSaveTitle = function(id, x, y) {
        if (showSaveTitle) {
            if (id === 0) {
                this.drawText(TextManager.autosave, x, y, 180);
            } else {
                this.drawText(TextManager.file + " " + id, x, y, 180);
            }
        }
    };

    Window_SaveFileStatus.prototype.drawSaveTime = function(info, valid, x, y) {
        if (showSaveTime && valid && info.savetime) {
            this.drawText(info.savetime, x, y, 200);
        }
    };

    Window_SaveFileStatus.prototype.drawLocation = function(info, valid, x, y) {
        if (showLocation && valid && info.location) {
            const drawnText = locationTitle + ' ' + (info.location ? info.location : "");
            this.drawTextEx(drawnText, x, y, 200);
        }
    };

    Window_SaveFileStatus.prototype.drawPlayTime = function(info, valid, x, y) {
        if (showPlayTime && valid && info.playtime) {
            const drawnText = playTimeTitle + ' ' + (info.playtime ? info.playtime : "");
            this.drawTextEx(drawnText, x, y, 200);
        }
    };

    Window_SaveFileStatus.prototype.drawMoney = function(info, valid, x, y) {
        if (showMoney && valid && typeof info.gold === 'number') {
            const drawnText = moneyTitle + ' ' + info.gold + ' ' + TextManager.currencyUnit;
            this.drawTextEx(drawnText, x, y, 200);
        }
    };

    Window_SaveFileStatus.prototype.drawLevel = function(info, valid, x, y) {
        if (showLevel && valid && info.level) {
            const drawnText = TextManager.levelA + ' ' + info.level;
            this.drawTextEx(drawnText, x, y, 60);
        }
    };

    Window_SaveFileStatus.prototype.drawPartyCharacters = function(info, valid, x, y) {
        if (showParty && valid && info.characters) {
            let characterX = x;
            for (const data of info.characters) {
                this.drawCharacter(data[0], data[1], characterX, y);
                characterX += 48;
            }
        }
    };
////////////
    // function Window_Thumbnail() {
    //     this.initialize(...arguments);
    // }
    
    // Window_Thumbnail.prototype = Object.create(Window_Base.prototype);
    // Window_Thumbnail.prototype.constructor = Window_Thumbnail;
    
    // Window_Thumbnail.prototype.initialize = function() {
    //     Window_Base.prototype.initialize.call(this, 0, 0, 0, 0); // 적절한 크기 및 위치로 초기화
    //     this._bitmap = null;
    // };
    
    // Window_Thumbnail.prototype.setBitmap = function(bitmap) {
    //     this._bitmap = bitmap;
    // };
    
    // Window_Thumbnail.prototype.update = function() {
    //     Window_Base.prototype.update.call(this);
    //     if (this._bitmap) {
    //         this.contents.clear();
    //         const source = new Rectangle(0, 0, this._bitmap.width, this._bitmap.height);
    //         const destination = new Rectangle(0, 0, this.contentsWidth(), this.contentsHeight());
    //         this.contents.blt(this._bitmap, source, destination);
    //     }
    // };
////////////

Window_SaveFileStatus.prototype.drawSnappedImage = function(savefileId, valid, x, y) {
    const snapUrl = DataManager.getThumbnail(savefileId);
    if (showThumbnail && valid && snapUrl) {
        const bitmap = ImageManager.loadThumbnailFromUrl(snapUrl);
        this.changePaintOpacity(true);
        bitmap.addLoadListener(function() {
            this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y);
        }.bind(this));
    }
};


    

    const _window_saveFileStatus_resetFontSettings = Window_SaveFileStatus.prototype.resetFontSettings;
    Window_SaveFileStatus.prototype.resetFontSettings = function() {
        _window_saveFileStatus_resetFontSettings.call(this);
        this.setFontSize(fontSize);    // フォントの再設定
    };

    // 
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
})();