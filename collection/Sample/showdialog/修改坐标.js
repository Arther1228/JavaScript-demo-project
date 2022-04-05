1.PtFrontDevice   form.jsp 
    <script type="text/javascript" src="<c:url value='/commons/scgis/js/scgis_common.js'/>"></script>

 //GIS定位经纬度
    $("#imgbiaodian").click(function(){
    	var longitude=$("#longitude").val();
    	var latitude=$("#latitude").val();
    	xylocation(('PtFrontDecive.do?method=locationMap&id='+$("#id").val()+'&longitude='+longitude+'&latitude='+latitude))
    });
 
2.scgis_common.js

//获取点位坐标
function xylocation(){
	var xposition = (screen.width - 420) / 2;
	var yposition = (screen.height - 520) / 2;
	var winproperty = "edge:sunken;center:Yes;help:Yes;unadorned:yes;scroll:no; resizable: no; status: no;dialogWidth=900px;dialogHeight=600px;left=" + xposition+ ";top=" + yposition;
	//var strURL ="../commons/scgis/jsp/PtGisPointSelect.jsp?x="+longitude+"&y="+latitude;
	var strURL ="KkCustoms.do?method=gisSelect";
	
	var arg = new Object();// 传递进去的参数
	arg.win = window;// 把当前窗口的引用当参数传进去
	window.showModalDialog(strURL, arg, winproperty);
}

 
//定位回调,经度，纬度，比例尺，地址
function locationCallback(longitude,latitude){
	$("#longitude").val(longitude.toPrecision(11));
	$("#latitude").val(latitude.toPrecision(10));
}

3.PtFrontDeciveAction.java
	/**
	 * @description 指向点位定位GIS页面
	 * @param id
	 *            点位ID
	 * @return 点位定位GIS页面
	 */
	public ActionForward locationMap(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		DynaBean dynaBean = (DynaBean) form;
		String id = (String) dynaBean.get("id");
		String longitude = (String) dynaBean.get("longitude");
		String latitude = (String) dynaBean.get("latitude");
		PtCameraInfo ptCameraInfo = new PtCameraInfo();
		ptCameraInfo.setId(Long.parseLong(id));
		ptCameraInfo = super.getFacade().getPtCameraInfoService().getPtCameraInfo(ptCameraInfo);
		if (StringUtils.isNotEmpty(longitude) && StringUtils.isNotEmpty(latitude)) {
			ptCameraInfo.setLongitude(longitude);
			ptCameraInfo.setLatitude(latitude);
		}
		super.copyProperties(dynaBean, ptCameraInfo);
		// 操作日志 GIS展示
		// super.setOperateLog(form, request, 10, 17);
		return new ActionForward("/../commons/scgis/jsp/PtGisPointSelect.jsp");
	}
}

4.PtGisPointSelect.jsp
<script type="text/javascript" src="${ctx}/commons/scgis/js/gisScript_Location.js"></script>

5.gisScript_Location.js

	function init() {
	
		geometryService = new GeometryService(_geometryServiceURL);
		map = new esri.Map("map",{logo:false,slider:false});
		dojo.connect(map, "onLoad", showFormerCoordinates);
		dojo.connect(map, "onClick", showCoordinates);
		var scalebar = new esri.dijit.Scalebar({map:map, scalebarUnit:"metric",attachTo:"bottom-left"});
		var imageParameters = new esri.layers.ImageParameters();
		imageParameters.format = "jpeg";  //set the image type to PNG24, note default is PNG8.
	        
	        //Takes a URL to a non cached map service.
		tileMapServiceLayer = new esri.layers.ArcGISTiledMapServiceLayer(_tiledMapServiceURL, {"opacity":1, "imageParameters":imageParameters});
		map.addLayer(tileMapServiceLayer);
		
		
		//showFormerCoordinates();
	}
function showCoordinates(evt) {
        	
		var mp = evt.mapPoint;//从事件中得到mapPoint
	    //显示鼠标坐标
	    //dojo.byId("info").innerHTML = mp.x + ", " + mp.y;
		var arg = window.dialogArguments;
		var win;
		if (arg == undefined) {
			win = window.opener;
		} else {
			win = arg.win;
		}
		win.locationCallback(mp.x, mp.y, "", "");
		window.close();
	}	
	
	function showFormerCoordinates() {
			if(map.graphics)
				//clearMap();
			var point;
			var coordX = null;
			var coordY = null;
			var type=1;
			
			if($("#longitude").val()!=null)
			{ 
				coordX = $("#longitude").val();
			}
			if($("#latitude").val()!=null)
			{ 
				coordY = $("#latitude").val();
			}
			if($("#type").val()!=null)
			{ 
				type = $("#type").val();
			}	 
			if(coordX!=null&&coordY!=null&&coordX!=""&&coordY!=""){
				point= new esri.geometry.Point(coordX,coordY,new esri.SpatialReference({"wkid":4326}));
				var defaultSymbol = new esri.symbol.PictureMarkerSymbol("/pahfpt/gis/images/symbol/RedPin1LargeB.png", 32, 32);  
				var infoContent = "经度：" + $("#longitude").val() + "</br>纬度：" + $("#latitude").val();
				var infoTemplate = new esri.InfoTemplate($("#alarm_name").val(), infoContent);
				var graphic = new esri.Graphic(point, defaultSymbol);  
				graphic.setInfoTemplate(infoTemplate);
				map.graphics.add(graphic);
				map.infoWindow.resize(200, 150);	
				map.centerAt(point); 
			}else{
				map.infoWindow.resize(200, 150);	
			}
	
	}
