/*
  * ------------------------------------------------- -
  * MNKR_KMS_SaveWithSnapMZ.js
  * Ver.0.1.4
  * Copyright (c) 2021 Munokura
  * This software is released under the MIT license.
  * http://opensource.org/licenses/mit-license.php
  * ------------------------------------------------- -
  */

//================================================ =============================
// KMS_SaveWithSnap.js
// Last update: 2015/12/04
//================================================ =============================

/*
The MIT License

Copyright © 2015 TOMY

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*:ko
  * @target MZ
  * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_KMS_SaveWithSnapMZ.js
  * @plugindesc 저장/로드 화면에 스크린샷을 추가합니다.
  *
  * @author TOMY (변형 munokura)
  *
  * @help
  * 저장/로드 화면에 스크린샷을 추가합니다.
  * 저장된 맵 이름을 표시할 수도 있습니다.
  *
  * 이 플러그인에는 플러그인 명령이 없습니다.
  *
  *
  * 이 플러그인 정보
  * RPG 쯔쿠루 MV용으로 작성된 플러그인을 MZ용으로 이식한 것입니다.
  * 문의는 개변자에게 부탁드립니다.
  *
  * 이용 약관:
  * MIT 라이센스입니다.
  * https://licenses.opensource.jp/MIT/MIT.html
  * 작자에게 무단으로 변경, 재배포가 가능하며,
  * 이용 형태(상용, 18금 이용 등)에 대해서도 제한은 없습니다.
  *
  *
  * @param fontSize
  * @text 글꼴 크기
  * @default 26
  * @desc 저장 화면 전체의 글꼴 크기. 기본값:26
  *
  * @param mapImages
  * @text 지도 이미지
  *
  * @param imageScale
  * @text 이미지 크기 배율
  * @default 0.15
  * @desc 저장 화면에 표시되는 이미지의 해상도(와 같은 것). 클수록 저장 크기가 커집니다. 기본값:0.15
  * @parent mapImages
  *
  * @param enableJpeg
  * @text JPEG 권한
  * @type boolean
  * @on JPEG 허용
  *@off PNG만 허용
  * @default true
  * @desc JPEG 형식이 사용 가능하고 PNG보다 크기가 작은 경우 JPEG를 사용합니다.
  * @parent mapImages
  *
  * @param imageX
  * @text 맵 이미지 X축
  * @default 0
  * @desc 맵 이미지의 표시 위치를 X축 오프셋 하는 픽셀량
  * 양수 값으로 오른쪽, 음수 값으로 왼쪽으로 오프셋합니다.
  * @parent mapImages
  *
  * @param imageY
  * @text 맵 이미지 Y 축
  * @default 0
  * @desc 맵 이미지의 표시 위치를 Y축 오프셋 하는 픽셀량
  * 양수 값으로 아래로, 음수 값으로 위로 오프셋합니다.
  * @parent mapImages
  *
  * @param imageHight
  * @text 지도 이미지 높이
  * @default 84
  * @desc 맵 이미지의 표시 높이의 픽셀 양. 프레임 높이를 초과하는 값은 유효하지 않습니다. 너비는 높이에서 종횡비를 유지하여 계산됩니다. 기본값:84
  * @parent mapImages
  *
  * @param drawTitles
  * @text 저장 제목
  *
  * @param drawTitle
  * @text 저장 제목 표시
  * @type boolean
  * @on 표시
  * @off 숨기기
  * @default false
  * @desc 디폴트로 세이브 리스트에 표시되는 「파일 x」의 표시 전환
  * @parent drawTitles
  *
  * @param titleX
  * @text 저장 제목 X 축
  * @default 0
  * @desc 세이브 타이틀의 표시 위치를 X축 오프셋 하는 픽셀량
  * 양수 값으로 오른쪽, 음수 값으로 왼쪽으로 오프셋합니다. 기본값:0
  * @parent drawTitles
  *
  * @param titleY
  * @text 저장 제목 Y 축
  * @default 4
  * @desc 세이브 타이틀의 표시 위치를 Y축 오프셋 하는 픽셀량
  * 양수 값으로 아래로, 음수 값으로 위로 오프셋합니다. 기본값: 4
  * @parent drawTitles
  *
  * @param titleWidth
  * @text 저장 제목 너비
  * @default 180
  * @desc 저장 제목 표시 폭의 픽셀 양
  * 기본값: 180
  * @parent drawTitles
  *
  * @param drawMapNames
  * @text 맵 이름
  *
  * @param drawMapName
  * @text 맵 이름 표시
  * @type boolean
  * @on 표시
  * @off 숨기기
  * @default true
  * @desc 저장 데이터에 저장할 때 맵 이름을 표시할지 여부를 지정합니다.
  * @parent drawMapNames
  *
  * @param mapNameX
  * @text 맵명 X축
  * @default 0
  * @desc 맵명의 표시 위치를 X축 오프셋 하는 픽셀량
  * 양수 값으로 오른쪽, 음수 값으로 왼쪽으로 오프셋합니다. 기본값:0
  * @parent drawMapNames
  *
  * @param mapNameY
  * @text 맵명 Y축
  * @default 4
  * @desc 맵명의 표시 위치를 Y축 오프셋 하는 픽셀량
  * 양수 값으로 아래로, 음수 값으로 위로 오프셋합니다. 기본값: 4
  * @parent drawMapNames
  *
  * @param mapNameWidth
  * @text 맵 이름 폭
  * @default 568
  * @desc 맵 이름 표시 폭의 픽셀 양
  * 기본값:568
  * @parent drawMapNames
  *
  * @param drawPartys
  * @text 파티 캐릭터
  *
  * @param drawParty
  * @text 파티 캐릭터 표시
  * @type boolean
  * @on 표시
  * @off 숨기기
  * @default true
  * @desc 저장 데이터에 저장할 때 파티 캐릭터를 표시할지 여부를 지정합니다.
  * @parent drawPartys
  *
  * @param partyX
  * @text 파티 캐릭터 X 축
  * @default 220
  * @desc 파티 캐릭터의 표시 위치를 X축 오프셋 하는 픽셀량
  * 양수 값으로 오른쪽, 음수 값으로 왼쪽으로 오프셋합니다. 기본값:220
  * @parent drawPartys
  *
  * @param partyY
  * @text 파티 캐릭터 Y 축
  * @default -8
  * @desc 파티 캐릭터의 표시 위치를 Y축 오프셋 하는 픽셀량
  * 양수 값으로 아래로, 음수 값으로 위로 오프셋합니다. 기본값:-8
  * @parent drawPartys
  *
  * @param playtimes
  * @text 플레이 시간
  *
  * @param playtime
  * @text 재생 시간 표시
  * @type boolean
  * @on 표시
  * @off 숨기기
  * @default true
  * @desc 저장 데이터에 저장할 때 재생 시간을 표시할지 여부를 지정합니다.
  * @parent playtimes
  *
  * @param playtimeX
  * @text 재생 시간 X 축
  * @default 0
  * @desc 플레이 시간의 표시 위치를 X축 오프셋 하는 픽셀량
  * 양수 값으로 오른쪽, 음수 값으로 왼쪽으로 오프셋합니다. 기본값:0
  * @parent playtimes
 */

    (() => {


    const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
    const pluginParams = PluginManager.parameters(pluginName);
    const Params = {};
    Params.fontSize = Number(pluginParams['fontSize'] || 5);

    Params.savefileBitmapScale = Number(pluginParams['imageScale'] || 0.8);
    Params.enableJpeg = String(pluginParams['enableJpeg']) === 'true';
    Params.imageX = Number(pluginParams['imageX'] || 0);
    Params.imageY = Number(pluginParams['imageY'] || 0);
    Params.imageHight = Number(pluginParams['imageHight'] || 84);

    Params.drawTitle = String(pluginParams['drawTitle']) === 'false';
    Params.titleX = Number(pluginParams['titleX'] || 0);
    Params.titleY = Number(pluginParams['titleY'] || 0);
    Params.titleWidth = Number(pluginParams['titleWidth'] || 180);

    Params.drawMapName = String(pluginParams['drawMapName']) === 'true';
    Params.mapNameX = Number(pluginParams['mapNameX'] || 0);
    Params.mapNameY = Number(pluginParams['mapNameY'] || 0);
    Params.mapNameWidth = Number(pluginParams['mapNameWidth'] || 568);

    Params.drawparty = String(pluginParams['drawParty']) === 'false';
    Params.partyX = Number(pluginParams['partyX'] || 220);
    Params.partyY = Number(pluginParams['partyY'] || 4);

    Params.playtime = String(pluginParams['playtime']) === 'true';
    Params.playtimeX = Number(pluginParams['playtimeX'] || 0);
    Params.playtimeY = Number(pluginParams['playtimeY'] || 0);
    Params.playtimeWidth = Number(pluginParams['playtimeWidth'] || 760);

        
        const _Scene_File_create = Scene_File.prototype.create;
        Scene_File.prototype.create = function() {
            _Scene_File_create.apply(this, arguments);
            
            //statusWindow 추가
            this._listWindow.height = this._listWindow.fittingHeight(8); // 리스트갯수

            const x = 100; // 바꾸면 status window 위치바뀜 
            const y = this._listWindow.y + 250; //this._listWindow.height;

            const width = 627; //Graphics.boxWidth;
            const height = 360; //Graphics.boxHeight - y;

            const rect = new Rectangle(x, y, width, height);
            const statusWindow = new Window_SavefileStatus(rect);
            this._listWindow.mzkp_statusWindow = statusWindow;
            this.addWindow(statusWindow);
    
            //위치 교환
            const yListWindow = this._listWindow.y;
            this._listWindow.y = this._listWindow.mzkp_statusWindow.y;
            this._listWindow.mzkp_statusWindow.y = yListWindow;
    
            this._listWindow.y = this._listWindow.y+100; // + 하면 세이브리스트 아래로내려감
    
    
        };
    
        const _Scene_File_start = Scene_File.prototype.start;
        Scene_File.prototype.start = function() {
            _Scene_File_start.apply(this, arguments);
            this._listWindow.ensureCursorVisible();
            this._listWindow.callUpdateHelp();//
        };
    
 // Bitmap
 
    /*
     * 비트맵을 URL 표현으로 변환
     */


    Bitmap.prototype.toDataURL = function () {
        if (Params.enableJpeg) {
           // 크기가 작아지는 쪽을 돌려준다
             // ※ 서포트외의 형식이 지정되면 PNG 가 되는 사양이므로,
             // 변환 결과가 null 등이 될 것은 없다
            const png = this._canvas.toDataURL('image/png');
            const jpeg = this._canvas.toDataURL('image/jpeg');
            return (png.length < jpeg.length) ? png : jpeg;
        } else {
            return this._canvas.toDataURL('image/png');
        }
    };

    //-----------------------------------------------------------------------------
    // DataManager

    const _KMS_SaveWithSnap_DataManager_loadSavefileImages = DataManager.loadSavefileImages;
    DataManager.loadSavefileImages = function (info) {
        _KMS_SaveWithSnap_DataManager_loadSavefileImages.call(this, info);
        if (info.snapUrl) {
            const hasEncryptedImages = Utils.hasEncryptedImages();
            Utils._hasEncryptedImages = false;
            ImageManager.loadBitmap(info.snapUrl);
            Utils._hasEncryptedImages = hasEncryptedImages;
        }
    };

    const _KMS_SaveWithSnap_DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function () {
        const info = _KMS_SaveWithSnap_DataManager_makeSavefileInfo.call(this);
        const bitmap = this.makeSavefileBitmap();
        if (bitmap) {
            info.snapUrl = bitmap.toDataURL();
        }
        if (Params.drawMapName) {
            info.mapname = $gameMap.displayName();
        }
        return info;
    };

    /*
     *저장 파일에 대한 비트맵 만들기
     */
    DataManager.makeSavefileBitmap = function () {
        const bitmap = $gameTemp.getSavefileBitmap();
        if (!bitmap) {
            return null;
        }
        const scale = Params.savefileBitmapScale;
        const newBitmap = new Bitmap(bitmap.width * scale, bitmap.height * scale);
        newBitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, newBitmap.width, newBitmap.height);
        return newBitmap;
    };

    //-----------------------------------------------------------------------------
    // Game_Temp

    const _KMS_SaveWithSnap_Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _KMS_SaveWithSnap_Game_Temp_initialize.call(this);
        this._savefileBitmap = null;
    };

    Game_Temp.prototype.setSavefileBitmap = function (bitmap) {
        this._savefileBitmap = bitmap;
    };

    Game_Temp.prototype.getSavefileBitmap = function () {
        if (this._savefileBitmap) {
            return this._savefileBitmap;
        } else {
            return SceneManager._backgroundBitmap;
        }
    };


    //-----------------------------------------------------------------------------
    // Window_SavefileList


    Window_SavefileList.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_SavefileList.prototype.maxCols = function() {
        return 1;
    };

    Window_SavefileList.prototype.itemHeight = function() {
        return this.lineHeight()+10 ;//+ 16; // 세이브파일 줄 높이 조정 
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
        this._savefileId = 5;
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
        //this.drawTitle(this._savefileId, rect.x, rect.y);
        if (info) {
            this.drawSnappedImage(info, rect);
            //this.drawContents(info, rect);
        }
        //this.drawTitle(this._savefileId, rect.x, rect.y + 4); // 수정이 필요한 부분
    };
    

    Window_SavefileStatus.prototype.drawTitle = function(savefileId, x, y) {
        if (savefileId === 0) {
            this.drawText(TextManager.autosave, x, y, 180);
        } else {
            this.drawText(TextManager.file + " " + savefileId, x, y, 180);
        }
    };

    Window_SavefileStatus.prototype.drawContents = function(info, rect) {
        const bottom = rect.y + rect.height;
        const playtimeY = bottom - this.lineHeight();
        this.drawText(info.title, rect.x + 192, rect.y, rect.width - 192);
        //this.drawPartyfaces(info.faces, rect.x, bottom - 144);
        this.drawText(info.playtime, rect.x, playtimeY, rect.width, "right");
        
    };

    Window_SavefileStatus.prototype.drawPartyfaces = function(faces, x, y) {
        if (faces) {
            for (let i = 0; i < faces.length; i++) {
                const data = faces[i];
                this.drawFace(data[0], data[1], x + i * 150, y);
            }
        }
    };

    Window_SavefileStatus.prototype.drawSnappedImage = function (info, rect) {
        if (!info.snapUrl) {
            return;
        }
        const hasEncryptedImages = Utils.hasEncryptedImages();
        Utils._hasEncryptedImages = false;
        const bitmap = ImageManager.loadBitmapFromUrl(info.snapUrl);
        Utils._hasEncryptedImages = hasEncryptedImages;
        const dh = 360;
        const dw = 627;
        const dx = rect.x + Math.max(rect.width - dw - 120, 0) + Params.imageX;
        const dy = rect.y + 4 + Params.imageY;
        //const dh = Params.imageHight < this.itemHeight() - 12 ? Params.imageHight : this.itemHeight() - 12;
        // const dw = parseInt(bitmap.width * dh / bitmap.height);
        // const dx = rect.x + Math.max(rect.width - dw - 120, 0) + Params.imageX;
        // const dy = rect.y + 4 + Params.imageY;
        this.changePaintOpacity(true);
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, dx, dy, dw, dh);
    };


})();
