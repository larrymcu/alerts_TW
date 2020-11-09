var ScriptTemp_T300250_Extreme_ = document.createElement('script');
                            ScriptTemp_T300250_Extreme_.type = 'text/template';
                            ScriptTemp_T300250_Extreme_.id = 'TempID_T300250_Extreme_';
                            ScriptTemp_T300250_Extreme_.text = "<li> \
                    <div class='alertCAP_banner alertCAP_banner02 bannerYellow banner300X250' style='width:300px;margin: 0px auto;'>\
                         <div class='block_up' style='background-color:#086471;color:#ffffff;height:70px;'>\
                              <div class='alertCAP_Area'>全國</div>\
                              <div class='alertCAP_titleicon'style='background-color:#086471;'>\
          	                    <img src='{{@AlertImage}}';style='width:35px;height:52.5px;'title='{{@Event}}' alt='{{@Event}}'>\
                                   <div class='alertCAP_title' style='background-color:#086471;color:#ffffff'>{{@Event}}</div>\
                              </div>\
                         </div>\
                         <div class='block_down' style='background-color:#d9ead3;color:#000000;height:180px;font-size:16px'>\
                              <div class='alertCAP_con' style='font-size:16px;'>\
                                 <div class='alertCAP_time' style= 'color:#000000;font-size:16px;'>{{@Time}}│{{@OrgName}}</div>\
                                   {{@Summary}}\
                                 </div>\
                               <div class='alertCAP_moreBOX'>\
                                  <a href='{{@LinkMore}}' class='BUTmore' style='color:#ffffff' target='_blank'>詳細資料》</a>\
                               </div>\
                               <div class='alertCAP_logo'>\
           	                    <a href = 'https://www.ncdr.nat.gov.tw/' title='連結到國家災害防救科技中心(另開新視窗)' target='_blank'> \
                                   <img alt = '國家災害防救科技中心' title='國家災害防救科技中心(另開新視窗)'  src='https://alerts.ncdr.nat.gov.tw/Images/banner_logo.jpg'/> \
                                </a>\
                            </div>\
                         </div>\
                    </div>\
                                               </li>";
                            document.head.appendChild(ScriptTemp_T300250_Extreme_);
var EventStr = "地震,行動電話中斷,防空,停班停課,電力中斷,鐵路事故,鐵路事故";
var VillageId = "";
var SeverityLevel = "";
var SeverityLevel = "";
var capdata_T300250_Extreme_ ={};
capdata_T300250_Extreme_.Newflag =false;
capdata_T300250_Extreme_.Timestamp ='';
capdata_T300250_Extreme_.Topic ='';
capdata_T300250_Extreme_.Datas =[];
function iniCapData_Json_T300250_Extreme_(){
if(typeof($("#CapModule_T300250_Extreme_").attr("id")) != "undefined"){var div = document.createElement('div');var ul = document.createElement('ul');  var FilterDataFlag = false;ul.id='portfolio';

                                var AlertImage = '';
                                $.each(capdata_T300250_Extreme_.Datas, function (value, item) {
                                    let today = new Date();
                                    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes();
                                    let Expires = item.Expires;

                                    AlertImage = GetBannerImg(item.Code);
                                    var template = $('#TempID_T300250_Extreme_').html();
                                    template = template
                                        .replace(/{{@Code}}/g, item.Code)
                                        .replace(/{{@Event}}/g, item.Event)
                                        .replace(/{{@AlertImage}}/g, AlertImage)
                                        .replace(/{{@Time}}/g, item.Time)
                                        .replace(/{{@OrgName}}/g, item.OrgName)
                                        .replace(/{{@LinkMore}}/g, item.LinkMore);
                       template = template.replace(/{{@Summary}}/g, item.Summary.slice(0,120));
 if(EventStr.indexOf(item.Event)!= '-1'){  
                              if (VillageId == '') {
                                  FilterDataFlag = true;
                              } else if (VillageId.indexOf(item.VillIDs) != '-1' || item.VillIDs.indexOf('all') != '-1') {
                                  FilterDataFlag = true
                                 }

                              if (FilterDataFlag) {
                                    if (SeverityLevel == '' || (SeverityLevel == 'Extreme' && item.Severity == SeverityLevel)) {
                                    if (Date.parse(date).valueOf() > Date.parse(Expires).valueOf()) {
                                  FilterDataFlag = false;
                              }   

                              } else {
                                        FilterDataFlag = false;
                                     }
                                }
                          if(FilterDataFlag){$(ul).append(template);}
                    }});if(!FilterDataFlag){

                                        var today = new Date();
            AlertImage = GetBannerImg('');
            var template = $('#TempID_T300250_Extreme_').html();
            template = template
                .replace(/{{@Code}}/g, '')
												.replace(/{{@Event}}/g, '現無示警')
												.replace(/{{@AlertImage}}/g, AlertImage)
												.replace(/{{@Time}}/g, today.toString().substring(0, 19))
												.replace(/{{@OrgName}}/g, '更新')
												.replace(/{{@LinkMore}}/g, 'https://alerts.ncdr.nat.gov.tw');
            template = template.replace(/{{@Summary}}/g, '現在沒有示警');
										$(ul).append(template);
        }$(div).append(ul);$("#CapModule_T300250_Extreme_").html("");$("#CapModule_T300250_Extreme_").append($(div).html());
								$('ul#portfolio').innerfade({speed: 2000,timeout: 5000,type: 'sequence',containerheight: '100px'});
								}}
setInterval(AjaxCall_T300250_Extreme_, 60000);setTimeout(AjaxCall_T300250_Extreme_, 2000); function AjaxCall_T300250_Extreme_() {
var suid1 = 'capdata_T300250';var suid2 = '_Extreme_';
var suid3 = '';
if(suid3.length>7){suid3 = suid3.substring(0,7);}
var suid = suid1+suid2+suid3;
console.log(suid); var WebAPI= 'http://61.56.4.221/DataWebAPI/api/CapData'+'?CapModuleType='+3+'&suid='+suid3+'&timeStamp='+capdata_T300250_Extreme_.Timestamp+'&format=json&ApiKey=E03F2189-3202-4B60-B9CA-FBB74418D144';
 $.getJSON(WebAPI, function (data) {
                              if(data == null){
								var today = new Date();
								var Nodata = {};
								Nodata.Topic = capdata_T300250_Extreme_.Topic;
								Nodata.Newflag = false;
								Nodata.Timestamp = '';
								Nodata.Datas = [{
									OrgName:'更新',
                                    UpdatedTime: today.toISOString().substring(0, 19),
									Summary: '現在沒有示警',
									Event: '現無示警',
									HeadLine: '',
									LinkMore: 'https://alerts.ncdr.nat.gov.tw',
									Code: ''
                                }];
        capdata_T300250_Extreme_ = Nodata;
							}else{
                            if (data.Newflag) {         capdata_T300250_Extreme_ = data;
								capdata_T300250_Extreme_.Timestamp = data.Timestamp;
                            } else {
                                // alert('no change');
                            }}
                            iniCapData_Json_T300250_Extreme_();
                        });} function GetBannerImg(Code){
								try{
                                        if(Code == '' || Code == null)
                                            return 'https://alerts.ncdr.nat.gov.tw/Images/todayIsGoodDay.png';
                                        else
                                            return 'https://alerts.ncdr.nat.gov.tw/Images/calamityIcon150Black_'+Code+'.png?version=1'
								}
								catch(e){
									return '';
								}
							}


