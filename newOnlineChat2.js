var language="ch_cn";var ChatLanguage="0";var host="http://www.365webcall.com/";var _365groups_CallServerTimeSpan=20000;var _365groups_SessionID="";var Movies=null;var contentPosition=0;var autoPrompt=null;var sysClosed=2;var lbNickName="";var UserID=0;var panelContent=null;var robotContent=null;var lastTime='';var init=true;var bot=0;var user_stat="1";var chatnum=0;var sInputText="";var postkey=1;var grade="0";var gtemp="";var feedback=0;var closeWin=0;var serviceGraded=0;var closePrompt=false;var leaveWords=0;var bot_dir="";var robot_reply_delayed=0;var turnToArtificial=0;var queue=false;var refreshDataTime=new Date();var sendMsgs=new Array();var onSend=true;var showImg;var showDiv=0;var SpecialPara=0;var nochat_Interval=0;var nochat_Content="";var AutoCallTransferTime=0;var lwRequire=0;var Select=false;var s_UserID=0;var s_listGroup=0;var noleaveWord=false
var noLeaveNotice="";var haveFace=true;var hold=false;var WebCaptureInstalled=false;var div_kn=null;var kTxtInput=null;var ul_kn=null;var getKnowledgePrompt=null;var InputTextForSuggest="";var kn=new Array();var show_kn=new Array();var winType=0;var bgcolor="#26aaff";var showBusinessCard=0;var ifShowRight=0;var right_url="Hotissue.htm";var knowGuide=false;var captureParam="";var TitleMsgType=false;var thisWinFocus=true;var page_title=window.document.title;var font_color="";var font_size="";var ClientName="";var welcomPage=0;var welcome_phone=false;var welcome_email=false;var webChat=false;var OpenWay=0;var QueueChatWaitTime=0;var offmsg=false;var special="";var shunfeng=false;var zjsj=false;var chatTimes=0;var onlineVideo=0;var onlineVideoTime=new Date();var recordFile="";var wAvatar="";var autoToRobot=false;var toRobotPrompt=null;var holdPrompt=null;var holdMsg="";var lt_prevent="";var lt_prevent_msg="";var isSwitch=-1;var ImgAddress="";window.onblur=function(){thisWinFocus=false;};window.onfocus=function(){thisWinFocus=true;stopTitleMsg();};(function(){if(window.addEventListener){window.addEventListener("beforeunload",closeChatWinPrompt,false);window.addEventListener("resize",resizeMask,false);window.addEventListener("unload",ExitChatWin,false);window.addEventListener('message',receiveParentMsg,false);}
else if(window.attachEvent){window.attachEvent("onbeforeunload",closeChatWinPrompt);window.attachEvent("onresize",resizeMask);window.attachEvent("onunload",ExitChatWin);}
else{if(window.onbeforeunload)
window.onbeforeunload=closeChatWinPrompt;if(window.onresize)
window.onresize=resizeMask;if(window.onunload)
window.onunload=ExitChatWin;}})();window.webcallLock=window.webcallLock||{};webcallLock.async={lock:function(lock,action){webcallLock.async.waitings[lock]=webcallLock.async.waitings[lock]||[];if(!webcallLock.async.lockStatus[lock]&&action&&(typeof(onSend)=="undefined"||!onSend)){webcallLock.async.lockStatus[lock]=true;action();}
else{webcallLock.async.waitings[lock].push(action);}},releaseLock:function(lock){if(!webcallLock.async.waitings[lock])
return false;if(webcallLock.async.waitings[lock].length){webcallLock.async.waitings[lock][0]();webcallLock.async.waitings[lock].shift();}else{webcallLock.async.lockStatus[lock]=false;}
return webcallLock.async.lockStatus[lock];},lockStatus:[],waitings:[]}
function setPic(img,ht){}
function JSONArg(key){this.key=key;this.status="";this.action=bot;this.content="";this.userID=0;this.group=0;this.email="";this.mobile="";this.Phone="";this.qq="";this.msn="";this.skype="";this.address="";this.name="";this.grade="";this.OtherItem="";this.nIndex=contentPosition;this.SessionID=_365groups_SessionID;this.identifer=new Date().getTime().toString();}
function $365_t(root,tag,id){var ar=root.getElementsByTagName(tag);for(var i=0;i<ar.length;i++){if(ar[i].id==id)return ar[i];}
return null;}
function UpdateLang(){if(bot==1){var divFeedback=get_element_id("divFeedback");if(divFeedback!=null)
divFeedback.style.display="none";var divMovies=get_element_id("divMovies");if(divMovies!=null)
divMovies.style.marginLeft="10px";var robotContent=get_element_id("robotContent");if(robotContent!=null)
robotContent.style.display="";var ldFeedback=get_element_id("ldFeedback");if(ldFeedback!=null)
ldFeedback.style.display="none";var ldPhotos=get_element_id("ldPhotos");if(ldPhotos!=null)
ldPhotos.style.display="none";var hkhd=get_element_id("hkhd");if(hkhd!=null)
hkhd.style.paddingLeft="80px";var switchOnline=get_element_id("switchOnline");if(switchOnline!=null){switchOnline.value=GetShowText("toArtificial");if(special=="12366")
switchOnline.style.display="";}
var divimgFile=get_element_id("divimgFile");if(divimgFile!=null)
divimgFile.style.display="none";var divimgCapture=get_element_id("divimgCapture");if(divimgCapture!=null)
divimgCapture.style.display="none";var divimgvSave=get_element_id("divimgvSave");if(divimgvSave!=null)
divimgvSave.style.display="none";var aEvaluation=get_element_id("aEvaluation");if(aEvaluation!=null)
aEvaluation.style.display="none";}
else{var switchOnline=get_element_id("switchOnline");if(switchOnline!=null)
switchOnline.value=GetShowText("toRobot");var divimgFile=get_element_id("divimgFile");if(divimgFile!=null)
divimgFile.style.display="";var divimgCapture=get_element_id("divimgCapture");if(divimgCapture!=null)
divimgCapture.style.display="";var divimgvSave=get_element_id("divimgvSave");if(divimgvSave!=null)
divimgvSave.style.display="";var aEvaluation=get_element_id("aEvaluation");if(aEvaluation!=null)
aEvaluation.style.display="";if(special=="12366"||(typeof(liantong)!="undefined"&&liantong)){if(aEvaluation!=null)
aEvaluation.style.display="none";}}
var txtInput=get_element_id("txtInput");if(txtInput!=null)
txtInput.placeholder=GetShowText("remark_question");var closeOnline=get_element_id("closeOnline");if(closeOnline!=null)
closeOnline.value=GetShowText("closeWin");var divSend=get_element_id("divSend");if(divSend!=null)
divSend.innerText=GetShowText("btn_Send");var lGrade5=get_element_id("lGrade5");if(lGrade5!=null)
lGrade5.innerHTML=GetShowText("grade5");var lGrade4=get_element_id("lGrade4");if(lGrade4!=null)
lGrade4.innerHTML=GetShowText("grade4");var lGrade3=get_element_id("lGrade3");if(lGrade3!=null)
lGrade3.innerHTML=GetShowText("grade3");var lGrade2=get_element_id("lGrade2");if(lGrade2!=null)
lGrade2.innerHTML=GetShowText("grade2");var lGrade1=get_element_id("lGrade1");if(lGrade1!=null)
lGrade1.innerHTML=GetShowText("grade1");var aGrade5=get_element_id("aGrade5");if(aGrade5!=null)
aGrade5.title=GetShowText("grade5");var aGrade4=get_element_id("aGrade4");if(aGrade4!=null)
aGrade4.title=GetShowText("grade4");var aGrade3=get_element_id("aGrade3");if(aGrade3!=null)
aGrade3.title=GetShowText("grade3");var aGrade2=get_element_id("aGrade2");if(aGrade2!=null)
aGrade2.title=GetShowText("grade2");var aGrade1=get_element_id("aGrade1");if(aGrade1!=null)
aGrade1.title=GetShowText("grade1");var evaluecontent=get_element_id("evaluecontent");if(evaluecontent!=null)
evaluecontent.placeholder=GetShowText("evaluationPrompt4");var nickName=get_element_id("nickName");if(nickName!=null)
nickName.innerHTML=GetShowText("trueName");var FeedbackcCnfirm=get_element_id("FeedbackcCnfirm");if(FeedbackcCnfirm!=null)
FeedbackcCnfirm.innerHTML=GetShowText("btn_OK");var FeedbackPrompt=get_element_id("FeedbackPrompt");if(FeedbackPrompt!=null)
FeedbackPrompt.innerHTML=GetShowText("evaluationPrompt3");var ddMobie=get_element_id("ddMobie");if(ddMobie!=null)
ddMobie.innerHTML=GetShowText("chat_movies_alt");var ddEvaluation=get_element_id("ddEvaluation");if(ddEvaluation!=null)
ddEvaluation.innerHTML=GetShowText("evaluation");var ddCamera=get_element_id("ddCamera");if(ddCamera!=null)
ddCamera.innerHTML=GetShowText("camera");var ddPhotos=get_element_id("ddPhotos");if(ddPhotos!=null)
ddPhotos.innerHTML=GetShowText("photos");var spLeaveWordTitle=get_element_id("workerCard");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("workerCard");var spLeaveWordTitle=get_element_id("cellPhone");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("cellPhone");var spLeaveWordTitle=get_element_id("Phone");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("Phone");var spLeaveWordTitle=get_element_id("workerQQ");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("workerQQ");var spLeaveWordTitle=get_element_id("workerWX");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("workerWX");var spLeaveWordTitle=get_element_id("workerEmaile");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("workerEmaile");var spLeaveWordTitle=get_element_id("perInfor");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("workerCard");var spLeaveWordTitle=get_element_id("Pheader");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("Picture");var imgMovies=get_element_id("imgMovies");if(imgMovies!=null)
imgMovies.title=GetShowText("Movies");var imgFile=get_element_id("imgFile");if(imgFile!=null)
imgFile.title=GetShowText("file");var imgCapture=get_element_id("imgCapture");if(imgCapture!=null){if(special=="12366")
imgCapture.title="请使用电脑截图快捷键截图，一般为alt+a";else
imgCapture.title=GetShowText("capture");}
var imgvSave=get_element_id("imgvSave");if(imgvSave!=null)
imgvSave.title=GetShowText("save");var imgEvaluation=get_element_id("imgEvaluation");if(imgEvaluation!=null)
imgEvaluation.title=GetShowText("evaluation");var spKnClose=get_element_id("spKnClose");if(spKnClose!=null)
spKnClose.innerHTML=GetShowText("knowledge_prompt1");var spKnEsc=get_element_id("spKnEsc");if(spKnEsc!=null)
spKnEsc.innerHTML=GetShowText("knowledge_prompt2");if(div_kn==null)
div_kn=get_element_id("divKnowledge");if((SpecialPara&0x8000)==0){var smVersion=get_element_id("smVersion");if(smVersion!=null)
smVersion.innerHTML=GetShowText("versionPrompt");}
if((SpecialPara&0x1000)!=0){var faqBut=get_element_id("faqBut");if(faqBut!=null)
faqBut.style.display="";}
var sftitle=get_element_id("sftitle");if(sftitle!=null)
sftitle.innerHTML=GetShowText("SendFile_alt");var closePrompt=get_element_id("closePrompt");if(closePrompt!=null)
closePrompt.innerHTML=GetShowText("closePrompt");var closeConfirm=get_element_id("closeConfirm");if(closeConfirm!=null)
closeConfirm.innerHTML=GetShowText("btn_OK");var closeCancel=get_element_id("closeCancel");if(closeCancel!=null)
closeCancel.innerHTML=GetShowText("Cancel");var txtWelInput=get_element_id("txtWelInput");if(txtWelInput!=null)
txtWelInput.placeholder=GetShowText("remark_question");var welNickName=get_element_id("welNickName");if(welNickName!=null)
welNickName.placeholder=GetShowText("remark_name");var weltxtPhone=get_element_id("weltxtPhone");if(weltxtPhone!=null)
weltxtPhone.placeholder=GetShowText("remark_mobile");var weltxtEmail=get_element_id("weltxtEmail");if(weltxtEmail!=null)
weltxtEmail.placeholder=GetShowText("remark_email");var spNotice=get_element_id("spNotice");if(spNotice!=null)
spNotice.innerHTML=GetShowText("InputNotice");var welcomeSub=get_element_id("welcomeSub");if(welcomeSub!=null)
welcomeSub.value=GetShowText("beginChat");if(special=="jingyu"){var imgMovies=get_element_id("imgMovies").getElementsByTagName("img")[0];if(imgMovies!=null){imgMovies.src="images/newChat3/floatwin/"+special+"_expression.png";imgMovies.style.width="20px";imgMovies.style.height="20px";}
var imgVoice=get_element_id("imgVoice").getElementsByTagName("img")[0];if(imgVoice!=null){imgVoice.src="images/newChat3/floatwin/"+special+"_vphone.png";imgVoice.style.width="20px";imgVoice.style.height="20px";}
var imgFile=get_element_id("imgFile").getElementsByTagName("img")[0];if(imgFile!=null){imgFile.src="images/newChat3/floatwin/"+special+"_uploadfile.png";imgFile.style.width="20px";imgFile.style.height="20px";}
var imgRemote=get_element_id("imgRemote").getElementsByTagName("img")[0];if(imgRemote!=null){imgRemote.src="images/newChat3/floatwin/"+special+"_remote.png";imgRemote.style.width="20px";imgRemote.style.height="20px";imgRemote.style.display="";}
get_element_id("divimgCapture").style.display="none";get_element_id("divimgvSave").style.display="none";get_element_id("aEvaluation").style.display="none";get_element_id("closeOnline").style.display="none";get_element_id("divimgVoice").style.display="none";get_element_id("jingyu_closeOnline").style.display="block";HideRotButton();}}
function UpdateLeaveWordLang(){var txtNickName=get_element_id("txtNickName");if(txtNickName!=null){txtNickName.value=GetShowText("remark_name");txtNickName.style.color="#bcbccc";}
var txtPhone=get_element_id("txtPhone");if(txtPhone!=null){txtPhone.value=GetShowText("remark_phone");txtPhone.style.color="#bcbccc";}
var txtEmail=get_element_id("txtEmail");if(txtEmail!=null){txtEmail.value=GetShowText("remark_email");txtEmail.style.color="#bcbccc";}
var txtContent=get_element_id("txtContent");if(txtContent!=null){txtContent.value=GetShowText("remark_content");txtContent.style.color="#bcbccc";}
var LeaveWordConfirm=get_element_id("LeaveWordConfirm");if(LeaveWordConfirm!=null)
LeaveWordConfirm.innerHTML=GetShowText("submit");var spLeaveWordTitle=get_element_id("spLeaveWordTitle");if(spLeaveWordTitle!=null)
spLeaveWordTitle.innerText=GetShowText("leave_title");var txtMobile=get_element_id("txtMobile");if(txtMobile!=null){txtMobile.value=GetShowText("remark_mobile");txtMobile.style.color="#bcbccc";}
var txtQQ=get_element_id("txtQQ");if(txtQQ!=null){txtQQ.value=GetShowText("remark_qq");txtQQ.style.color="#bcbccc";}
var txtSkype=get_element_id("txtSkype");if(txtSkype!=null){txtSkype.value=GetShowText("remark_skype");txtSkype.style.color="#bcbccc";}
var txtMemberID=get_element_id("txtMemberID");if(txtMemberID!=null){txtMemberID.value=GetShowText("remark_memberID_m");txtMemberID.style.color="#bcbccc";}
var txtAddress=get_element_id("txtAddress");if(txtAddress!=null){txtAddress.value=GetShowText("remark_address");txtAddress.style.color="#bcbccc";}
var trOtherItem=get_element_id("trOtherItem");if(trOtherItem!=null){trOtherItem.value=GetShowText("remark_input");trOtherItem.style.color="#bcbccc";}
if((SpecialPara&0x8000)==0){var lwSmVersion=get_element_id("lwSmVersion");if(lwSmVersion!=null)
lwSmVersion.innerHTML=GetShowText("versionPrompt");}
var lwsSwitchOnline=get_element_id("lwsSwitchOnline");if(lwsSwitchOnline!=null)
lwsSwitchOnline.value=GetShowText("toRobot");var lwCloseOnline=get_element_id("lwCloseOnline");if(lwCloseOnline!=null)
lwCloseOnline.value=GetShowText("closeWin");var lwNotice=get_element_id("lwNotice");if(lwNotice!=null)
lwNotice.innerHTML=GetShowText("InputNotice");var closePrompt=get_element_id("closePrompt");if(closePrompt!=null)
closePrompt.innerHTML=GetShowText("closePrompt");var closeConfirm=get_element_id("closeConfirm");if(closeConfirm!=null)
closeConfirm.innerHTML=GetShowText("btn_OK");var closeCancel=get_element_id("closeCancel");if(closeCancel!=null)
closeCancel.innerHTML=GetShowText("Cancel");}
function closeThisWin(){if(window.external!=null&&window.external.closeCustomServer!=null)
window.external.closeCustomServer();if(navigator.userAgent.indexOf("Firefox")!=-1||navigator.userAgent.indexOf("Chrome")!=-1){window.location.href="about:blank";window.close();}else{window.opener=null;top.close();}
sendParentMsg("hide");}
function FormatInt(v,len){var s=v.toString();for(i=0;i<len-s.length;i++){s="0"+s;}
return s;}
function GetCurrentTime(type,ti,nickname){var t=new Date();if(typeof(ti)!="undefined"&&ti!=null){t=new Date(ti.replace(/\-/g,"/"));}
var s=FormatInt(t.getHours(),2)+':'+FormatInt(t.getMinutes(),2)+':'+FormatInt(t.getSeconds(),2);var r='';var nm=lbNickName;if(typeof(nickname)!="undefined"&&nickname!=null&&nickname!="")
nm=nickname;if(lastTime!=type+s){lastTime=type+s;r='<div class="msgTime timenode" ';if(typeof(type)!="undefined"){if(type=="v")
r+=' style="text-align: right;padding-right:12px ">'+GetShowText("I")+":";else if(type=="w"&&nm!="")
r+=' style="text-align: left;padding-left:12px ">'+nm+":";else
r+=' >';}
r+=s+'</div>';}
return r;}
function GetCurrentTime1(){var date=new Date();return FormatInt(date.getHours(),2)+":"+FormatInt(date.getMinutes(),2)+":"+FormatInt(date.getSeconds(),2);}
function bindClick(content){var p=/<img(.+?)src=[""|\']*([^\s]+?)[""|\']*(\s|>)/ig;if(content.match(p)){content=content.replace(content.match(p),content.match(p)+"onclick=\"showPicture(this)\"")}
return content;}
function showMsg(msg,type,t,ident){if(msg.length==0)
return;var pathname=window.location.pathname;if(pathname.indexOf("newRobotWin5")>0||pathname.indexOf("newChatWin5")>0){setSize();}
var css;var c="";if(type!="goods"){c=GetMsgstr(type,haveFace,msg,t,'',ident);}
else{c=msg;}
if(panelContent==null)
panelContent=get_element_id("panelContent");panelContent.innerHTML+=c;goToBottom();if(type!='v'){callApp();if(!TitleMsgType)
showTitleMsg();}}
function GetMsgstr(type,haveFace,msg,t,nickname,ident){var pathname=window.location.pathname;msg=bindClick(msg);msg=ParseMsnMovies(msg);var cssMore="",workerAvatar="",visitorAvatar="";if(special=="12366"&&type=='s'){css="systemMsg";}
else if(type=='v'){if(!haveFace)
cssMore=" noAvator";else
visitorAvatar=' <div class="vAvatar"></div>';css="msgVisitor "+cssMore;}
else{if(!haveFace)
cssMore=" noAvator";else{workerAvatar=' <div class="wAvatar" '+wAvatar+'></div>';cssMore=" haveface";}
if(pathname.indexOf("newRobotWin5")>0){css="msgRobot"+cssMore;}
else{css="msgWorker"+cssMore;}
if(type=='s')
css+=" sysBack";}
var feed="";if(typeof(ident)=="undefined")
ident="";if(bot==1&&ident.length>0&&typeof(eakay)=="undefined"&&!(special=="shunfeng")&&!zjsj)
feed="<p class=\"assess\">"+GetShowText("robotHelp")+"<span onclick=\"bot_feedback( this,"+ident+",1)\"><img src=\"images/newChat3/yingshi/goods.png\" />"+GetShowText("robotYes")+"</span> <span onclick=\"bot_feedback( this,"+ident+",2)\"><img src=\"images/newChat3/yingshi/bads.png\" style=\"vertical-align: sub\" />"+GetShowText("robotNo")+"</span></p>";var identID='';if(typeof(ident)!="undefined"&&ident.length>0)
identID='id = "'+ident+'"';return GetCurrentTime(type,t,nickname)+'<div class="'+css+'">'+workerAvatar+'<div class="message-text" '+identID+'><i></i>'+msg+feed+'</div>'+visitorAvatar+'</div>';}
function bot_feedback(o,ident,usefor){if(onSend){alert("正在连接，请稍候...");return;}
onSend=true;var g=new JSONArg("feedback");g.grade=usefor;g.identifer=ident;sendDataCallServer(EncodeString(JSON.stringify(g)));if(usefor==1){o.parentNode.innerHTML="<span style=\"float:right;color:#b1b1b1\">"+GetShowText("FeedbackAlt")+"<img src=\"images/newChat3/yingshi/goods.png\" /></span>";}
else{o.parentNode.innerHTML="<span style=\"float:right;color:#b1b1b1\">"+GetShowText("FeedbackAlt")+"<img src=\"images/newChat3/yingshi/bads.png\"  style=\"vertical-align:sub\"/></span>";if(bot==1&&typeof(eakay)!="undefined"){showMsg("对不起, 您对以上回复不满意！现在客服在线，转往人工客服&nbsp;<a style='text-decoration: underline;' href='javascript: SwitchOnlineService();'>咨询</a>。",'w');}}}
function goToBottom(){var contentScroll=get_element_id("panelContent");contentScroll.scrollTop=contentScroll.scrollHeight+10050;}
function showInitMsg(content){var msgs=content.split("<;>");for(var i=0;i<msgs.length;i++){var args=msgs[i].split("<|>");if(args.length>=3)
showMsg(args[2],args[0],args[1]);}}
function isWin4(){var pathname=window.location.pathname;if(pathname.indexOf("newRobotWin4")>0||pathname.indexOf("newChatWin4")>0)
return true;else
return false;}
function showRightInfo(){if(isWin4())
return;if(leaveWords==1){if(showBusinessCard==0||showBusinessCard==1){var leaveShowInfo=get_element_id("leaveShowInfo");if(leaveShowInfo!=null){leaveShowInfo.style.display="";}}
else if(showBusinessCard==2){var leaveShowUrl=get_element_id("leaveShowUrl");var leaveShowUrlIframe=null;if(leaveShowUrl!=null)
leaveShowUrlIframe=$365_t(leaveShowUrl,"IFRAME","leaveShowUrlIframe");if(leaveShowUrl!=null&&leaveShowUrlIframe!=null){if(right_url.replace(" ","")==""||right_url==null){var splpgo="";if(get_element_id("showInfo").getElementsByTagName("img").length>0)
splpgo=get_element_id("showInfo").getElementsByTagName("img")[0].src;if(special=="jingyu")
right_url="lore/lore.aspx?settings="+getQueryString("settings")+"&imgsrc="+encodeURI(splpgo);else if(special=="12366")
right_url="Hotissue.aspx?settings="+getQueryString("settings");else
right_url="Hotissue.aspx?settings="+getQueryString("settings")+"&imgsrc="+encodeURI(splpgo);}
leaveShowUrlIframe.src=right_url;leaveShowUrl.style.display="";var height=document.documentElement.clientHeight;leaveShowUrl.style.height=(height-55)+"px";leaveShowUrlIframe.style.height=(height-56)+"px";}}}
else{if(showBusinessCard==0||(bot==1&&showBusinessCard==1)){var showInfo=get_element_id("showInfo");if(showInfo!=null){showInfo.style.display="";}}
else if(showBusinessCard==1&&bot!=1){var workerDetaile=get_element_id("workerDetaile");if(workerDetaile!=null){workerDetaile.style.display="";}}
else if(showBusinessCard==2){var showUrl=get_element_id("showUrl");var showUrlIframe=null;if(showUrl!=null)
showUrlIframe=$365_t(showUrl,"IFRAME","showUrlIframe");if(showUrl!=null&&showUrlIframe!=null){var splpgo="";if(get_element_id("showInfo").getElementsByTagName("img").length>0)
splpgo=get_element_id("showInfo").getElementsByTagName("img")[0].src;if(right_url.replace(" ","")==""||right_url==null){if(special=="jingyu")
right_url="lore/lore.aspx?settings="+getQueryString("settings")+"&imgsrc="+encodeURI(splpgo);else if(special=="12366")
right_url="Hotissue.aspx?settings="+getQueryString("settings");else
right_url="Hotissue.aspx?settings="+getQueryString("settings")+"&imgsrc="+encodeURI(splpgo);}
showUrlIframe.src=right_url;showUrl.style.display="";}}}}
function doMsgConfirm(arg){var i=0;for(i=0;i<sendMsgs.length;++i){if(sendMsgs[i].identifer==arg.identifer)
break;}
if(i<sendMsgs.length)
sendMsgs.splice(i,1);}
function doSayMessage(arg){if(arg.key!="question"&&trim(arg.name).length>0)
lbNickName=arg.name;if(arg.key=="init"){if(haveFace&&arg.OtherItem.length>0)
wAvatar=arg.OtherItem;}
if(arg.content.length>0&&(arg.action!="r"||winType!=2)){if(special=="12366"&&bot==1&&arg.key=="msg")
arg.content+="<br /><span style=\"margin:5px 0 0 10px; font-size: 12px;\">如不能解答您的问题, 转往人工坐席&nbsp;<a style='text-decoration: underline;' href='javascript: SwitchOnlineService();'>咨询</a>。</span>";if(arg.key=="question")
showMsg(arg.content,'v');else if(arg.key=="init"){arg.content.indexOf('<|>')>0?showInitMsg(arg.content):showMsg(arg.content,'w');}
else if(arg.action=="s"||arg.action=="r"||arg.action=="f"){showMsg(arg.content,'s');}
else{showMsg(arg.content,'w',null,arg.identifer);sendParentMsg("msg",EncodeString("1<;>"+arg.name+"<;>"+RemoveHtml(arg.content)));}
if(init)
init=false;if(arg.key=="msg"){if(bot!=1&&nochat_Interval>=10&&nochat_Content.length>0){if(autoPrompt!=null)
clearTimeout(autoPrompt);autoPrompt=setTimeout('sendAutoPrompt()',nochat_Interval*1000);}
if(bot!=1&&holdMsg.length>0){if(holdPrompt!=null)
clearTimeout(holdPrompt);holdPrompt=setTimeout('sendHoldPrompt()',120*1000);}
if(toRobotPrompt!=null){clearTimeout(toRobotPrompt);toRobotPrompt=null;}
if(bot==1&&arg.msn.length>0)
lt_prevent=arg.msn;}
if(arg.key=="bot_dir")
bot_dir=arg.content;if(arg.key=="hold")
hold=true;if((arg.status=="1")||(arg.status=="2")||(arg.status=="3")||(arg.status=="4")||(arg.status=="5")||(arg.status=="6")||(arg.status=="a")||(arg.status=="b"))
chatnum++;}
if(arg.key=="init"){if(special=="12366"){if(bot==1){get_element_id("divimgMovies").style.display="none";get_element_id("txtInput").disabled=true;openGspopu();}
else{get_element_id("txtInput").disabled=false;disableEmotion=false;}}}
if(arg.key=="queue"){queue=true;_365groups_CallServerTimeSpan=5000;if(QueueChatWaitTime>0)
get_element_id("txtInput").disabled=true;if(arg.content.length==0){var qc=getElementsByClassName('queueCount','span');for(var i=0;i<qc.length;i++)
qc[i].innerHTML=arg.OtherItem;}}
if(arg.key=="init"){UserID=arg.userID;queue=false;if(QueueChatWaitTime>0)
get_element_id("txtInput").disabled=false;var webChatTitle=get_element_id("webChatTitle");if(webChatTitle!=null){webChatTitle.innerHTML=lbNickName+"&nbsp;&nbsp;"+GetShowText("chatting");webChatTitle.style.display="";}
var userStatus=get_element_id("userStatus");if(userStatus!=null)
userStatus.style.display="none";if(arg.msn!=null&&arg.msn!="")
setrightVideo(arg.msn);captureParam=arg.address;if(bot!=1)
divDoCaptureFromIframe('0');WebCaptureInitTime=new Date();}
if(bot==1){user_stat=arg.status;}
else if(bot!=1&&user_stat!=arg.status&&arg.key!="queue"){user_stat=arg.status;if((SpecialPara&0x1000000)==0){var msg="";if(user_stat=="2")
msg=lbNickName+GetShowText("BSY_alt");else if(user_stat=="4")
msg=lbNickName+GetShowText("AWY_alt");else if(user_stat=="0")
msg=lbNickName+(!offmsg?GetShowText("LEV_alt"):(typeof(offlineWord)!="undefined"?offlineWord:GetShowText("OUT_alt")));else if(user_stat=="1")
msg=lbNickName+GetShowText("ON_alt");if(msg.length>0){showMsg(msg,'s');}}}
if(arg.action=="f"){sysClosed=1;}
else if(arg.action=="r"){sysClosed=2;_365groups_CallServerTimeSpan=20000;}
else{sysClosed=0;}}
function doSetperinfor(arg){var workerDetaile=get_element_id("workerDetaile");if(workerDetaile==null)
return;if(arg.mobile.length>0){get_element_id("perCall").href="tel:"+arg.mobile;}
if(arg.Phone.length>0)
get_element_id("perCallp").href="tel:"+arg.Phone;getShowperInfor("perCellphone",arg.mobile);getShowperInfor("perPhone",arg.Phone);getShowperInfor("perQQ",arg.qq);getShowperInfor("perWeChat",arg.msn);if(arg.email.length<=20)
getShowperInfor("perEmaile",arg.email);else
getShowperInfor("perEmaile",arg.email.substring(0,15)+"...");get_element_id("perEmaile").title=arg.email;}
function getShowperInfor(perID,perInfor){get_element_id(perID).innerHTML=perInfor;}
function doSetTimeSpan(arg){_365groups_CallServerTimeSpan=parseInt(arg.content);}
function doSetSessionID(arg){_365groups_SessionID=arg.SessionID;}
function doSetPageTitle(arg){if(arg.content.length>0){window.document.title=arg.content;}
page_title=window.document.title;}
function doSetLogo(arg){var logo=get_element_id("logo");if(logo!=null&&arg.content.length>0)
logo.innerHTML=arg.content;}
function doEvaluation(arg){showMsg(GetShowText("pleaseEvaluation"),'s');MaskOpen();}
var WebChatTimeoutID=null;function ReceiveServerData(rValue){if(rValue.length>0){var jarg=JSON.parse(DecodeString(rValue));var msg=jarg["AjaxArguments"];for(var i=0;i<msg.length;i++){switch(msg[i].key){case"guide":doShowKnowGuide(msg[i]);break;case"know":doInsertKnowTitle(msg[i]);break;case"leaveWord":break;case"SwitchOnlineService":SwitchOnlineService();break;case"SwitchleaveWord":SwitchleaveWord();break;case"TimeSpan":doSetTimeSpan(msg[i]);break;case"SessionID":doSetSessionID(msg[i]);break;case"CustomerUrl":break;case"title":break;case"card":doSetperinfor(msg[i]);break;case"showAD":break;case"logo":doSetLogo(msg[i]);break;case"leaveword_result":doleaveWordResult(msg[i]);break;case"videoopen":break;case"videoclose":break;case"onlinevideo":onlineVringbell(lbNickName,1,msg[i].content);break;case"onlinevoice":onlineVringbell(lbNickName,2,msg[i].content);break;case"closeonlinevideo":closeOnlineVideoOrVoice();break;case"remoterequest":beremoted();break;case"remoteclose":cancelremote(3);break;case"remoterefuse":cancelremote(2);break;case"remoteclient":Inremote(0);break;case"remoteinfo":setRemoteInfo();break;case"RequestClientEvaluate":doEvaluation(msg[i]);break;case"webcaptureinstall":break;case"loginFail":break;case"loginSuccess":break;case"leftTime":break;case"MsgConfirm":doMsgConfirm(msg[i]);break;case"movies":switchMovies(msg[i].content);break;case"historyMsg":ShowhsMsg(msg[i]);setTimeout('goToBottom()',500);break;case"holdMsg":holdMsg="您好，坐席正在为您确认相关问题，请您耐心等待...";if(holdPrompt!=null)
clearTimeout(holdPrompt);holdPrompt=setTimeout('sendHoldPrompt()',120*1000);break;case"cancelHoldMsg":holdMsg="";if(holdPrompt!=null)
clearTimeout(holdPrompt);break;case"MsgCancel":messageWithdrawn(msg[i].content);break;case"hold":case"hello":case"question":case"msg":case"init":case"bot_dir":case"queue":doSayMessage(msg[i]);break;default:break;}
if(msg[i].key!="know"&&(msg[i].nIndex>contentPosition||msg[i].key=="init"))
contentPosition=msg[i].nIndex;if(msg[i].key=="init"){initGetMovies();initGetKnowlege(0);}}}
if(WebChatTimeoutID!=null)
window.clearTimeout(WebChatTimeoutID);refreshDataTime=new Date();onSend=false;if(!webcallLock.async.releaseLock("sendDataCallServer"))
WebChatTimeoutID=window.setTimeout("DoChatCallBack()",_365groups_CallServerTimeSpan);}
function ChatEnter(){if(leaveWords==1)
return;if(OpenWay=="1")
WelcomePageOpen();else if(Select&&bot==0)
openSelectService();else
initSendToServer();}
function WelcomePageOpen(){welcomPage=1;var pathname=window.location.pathname;if(!welcome_phone){get_element_id("divweltxtPhone").style.display="none";}
if(!welcome_email){get_element_id("divweltxtEmail").style.display="none";}
if(pathname.indexOf("newChatWin5")>0)
get_element_id("divPageMask").style.display="block";var welcomePage=get_element_id("welcomePage");welcomePage.style.display="block";}
function WelcomeInfo(){var weltxtPhone=get_element_id("weltxtPhone");var txtContent=get_element_id("txtWelInput");if(trim(txtContent.value).length<2){alert(GetShowText("questionError"));return;}
if(txtContent.value.length>400){alert(GetShowText("txtLenghtLimit"));return false;}
if(welcome_phone&&trim(weltxtPhone.value).length<5){alert(GetShowText("phonePrompt"));return;}
if(welcome_email&&trim(weltxtEmail.value).length<5){alert(GetShowText("emailPrompt"));return;}
var welcomePage=get_element_id("welcomePage");if(welcomePage)
welcomePage.style.display="none";get_element_id("divPageMask").style.display="none";if(Select)
openSelectService();else
initSendToServer();}
function initSendToServer(){var userStatus=get_element_id("userStatus");if(userStatus!=null){userStatus.innerHTML=GetShowText("ConnectingUser");userStatus.style.display="";}
var g=new JSONArg("enter");g.userID=s_UserID;g.group=s_listGroup;g.action=bot;g.OtherItem=isSwitch;isSwitch=-1;if(OpenWay==1&&!webChat){g.content=get_element_id("txtWelInput").value;g.email=trim(get_element_id("weltxtEmail").value);g.Phone=trim(get_element_id("weltxtPhone").value);g.name=trim(get_element_id("welNickName").value);}
var cn=get_element_id("csonNickName");if(cn!=null)
g.name=trim(cn.value);var ct=get_element_id("csonContent");if(ct!=null)
g.content=trim(ct.value);sendDataCallServer(EncodeString(JSON.stringify(g)));setInterval(doMonitorConnectionStatus,20000);}
function sendDataCallServer(j){try{CallServer(j,"");return true;}
catch(e){return false;}}
function doMonitorConnectionStatus(){if(init&&onSend){init=false;onSend=false;}
var timeDiff=parseInt(new Date()-refreshDataTime);if(timeDiff>_365groups_CallServerTimeSpan)
DoChatCallBack();}
function DoChatCallBack(){refreshDataTime=new Date();if(sysClosed==1||bot==1)
return;if(sysClosed!=2){var i=0,reSend=false;for(i=0;i<sendMsgs.length;++i){if(timeDiff("S",sendMsgs[i]["time"],new Date())>8){reSend=true;break;}}
if(reSend){var g=new JSONArg("msg");g.content=sendMsgs[i]["msg"];g.identifer=sendMsgs[i]["identifer"];sendMsgs[i]["time"]=new Date();sendDataCallServer(EncodeString(JSON.stringify(g)));return;}
sendParentMsg("fresh");}
var g=new JSONArg("refresh_data");if(!queue&&_365groups_CallServerTimeSpan<10000)
{var txtInput=get_element_id("txtInput");if(txtInput.value!=GetShowText("remark_question")&&sInputText!=txtInput.value){sInputText=txtInput.value;g.content="1"+filterString(txtInput.value);}}
if(sysClosed==2)
g.action="r";sendDataCallServer(EncodeString(JSON.stringify(g)));}
function SendData(inputValue,ykID){if(sysClosed==1)
return;var ar=false;if(inputValue=="?"||inputValue=="？")
ar=true;showMsg(inputValue,'v');if(ar&&bot_dir.length>0){showMsg(bot_dir,'w');onSend=false;return;}
var g=new JSONArg("msg");if(bot==1&&typeof(ykID)!="undefined"&&ykID!="robot"){g.identifer=ykID;g.content="ThirdRobotEngine_Question";}
else{g.content=inputValue;}
if(typeof(ykID)!="undefined")
g.action="1";sysClosed=0;var msgID=0;webcallLock.async.lock("sendDataCallServer",function(){onSend=true;if(bot!=1&&typeof(ykID)=="undefined"){var newMsg=new Object;newMsg["msg"]=inputValue;newMsg["identifer"]=g.identifer;newMsg["time"]=new Date();sendMsgs.push(newMsg);msgID=newMsg["identifer"];}
else{chatTimes++;}
sendDataCallServer(EncodeString(JSON.stringify(g)));});}
function sendHoldPrompt(){if(bot==1)
return;if(holdMsg.length>0){showMsg(holdMsg,'w');if(holdPrompt!=null)
clearTimeout(holdPrompt);holdPrompt=setTimeout('sendHoldPrompt()',120*1000);}}
function sendAutoPrompt(){if(bot==1)
return;if(nochat_Content.length>0){showMsg(nochat_Content,'w');nochat_Interval=0;if(nochat_Interval>=10){if(autoPrompt!=null)
clearTimeout(autoPrompt);autoPrompt=setTimeout('sendAutoPrompt()',nochat_Interval*1000);}}}
function YKRobotSendMsg(msg,ykId){if(typeof(msg)=="undefined"||msg==""){return;}
SendData(msg,ykId);}
function RobotSendMsg(msg){if(typeof(msg)=="undefined"||msg==""){return;}
if(autoPrompt!=null){clearTimeout(autoPrompt);autoPrompt=null;}
SendData(msg,"robot");}
function SendMsg(){stopTitleMsg();var txtInput=get_element_id("txtInput");if(CheckQueue()){txtInput.value="";return;}
txtInput.focus();if(txtInput.value==""||txtInput.value==GetShowText("remark_question")){return;}
if(txtInput.value.length>400){alert(GetShowText("txtLenghtLimit"));return;}
if(autoPrompt!=null){clearTimeout(autoPrompt);autoPrompt=null;}
if(autoToRobot&&bot==0&&!queue){if(toRobotPrompt==null)
toRobotPrompt=setTimeout("SwitchOnlineService('', '1')",120*1000);}
var filterValue=filterString(txtInput.value);var matchPIC=/((http):(\/\/|\\\\)(.[^\[]*)\.(gif|jpg|jpeg|bmp|png|ico))/ig;var inputValue=filterValue.replace("&nbsp;"," ");if(matchPIC.exec(filterValue)!=null){filterValue=inputValue.replace(matchPIC,"<a target=\"_blank\" href=\"$1\"><img src=\"$1\" hint=\"$1\" border=\"0\"></img></a>");}
else{var matchURL=new RegExp("((?:http://|https://|ftp://|mms://|rtsp://|www\.)(&(?=amp;)|[A-Za-z0-9\./=\?%_~@&#:;\+\-])+)","ig");if(matchURL.test(filterValue))
filterValue=inputValue.replace(matchURL,"<a target=\"_blank\" href=\"$1\">$1</a>");filterValue=filterValue.replace(/href=\"www/gi,"href=\"http://www");}
SendData(filterValue);txtInput.value="";}
function sendFeedback(){if(sysClosed==1)
return;var g=new JSONArg("feedback");g.grade=grade;g.content=get_element_id("evaluecontent").value;sendDataCallServer(EncodeString(JSON.stringify(g)));MaskClose();}
function ExitChatWin(){if(sysClosed!=0)
return;if(isWin4())
return;sendCloseMsg();}
function sendCloseMsg(){sysClosed=1;var g=new JSONArg("exit");g.grade=grade;g.content=get_element_id("evaluecontent").value;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function switchMoviesWindowFrame(){var frame=window.frames["ifMoviesWindow"];if(!frame){frame=get_element_id("ifMoviesWindow");}
if(frame)
frame.src="chat_movies.aspx?title="+GetShowText("chat_movies_title");}
function switchMovies(strMovies){if(strMovies.length>0){var m=JSON.parse(DecodeString(strMovies));Movies=m["Moives"];}
if(Movies==null||Movies.length==0)
switchMoviesWindowFrame();else
createMovies();}
function createMovies(){var s="<div class=\"movies_box\" onMouseOut=\"onLostFocusAllMovies(this)\">";var t=parseInt(Movies.length/40)*40;if(Movies.length%40>0)
t+=40;var p=0;var dir=""
for(var i=0;i<Movies.length||i<t;i++){if(i%40==0){var disp="";if(i>0){s+="</table>";disp="style=\"display:none;\"";}
p++;var id="movies_p"+p;s+="<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\" class=\"form\" id=\""+id+"\" "+disp+">";}
if(i%10==0){if(i>0)
s+="</tr>";s+="<tr>";}
var m="&nbsp;";var m1="";var h1=0;if(i<Movies.length){var w=Movies[i].width;var h=Movies[i].height;var nSize=25;h1=h;if(w>nSize||h>nSize){var r=w>h?(nSize*1.0)/w:(nSize*1.0)/h;w=parseInt(w*r);h=parseInt(h*r);}
var mt=Math.round((29-h)/2);MM_preloadImages(Movies[i].fileName);m="<img src=\""+Movies[i].fileName+"\" border=\"0\" style=\"margin-top:"+mt+"px; width:"+w+"px; height:"+h+"px; cursor: pointer;\" onclick=\"SelectMovie('"+Movies[i].Wildcard+"')\" alt=\""+Movies[i].Wildcard+"\"/>";m1=Movies[i].fileName;}
var l=0;if(i%10>=5)
l=1;s+="<td><div class=\"box1\" >"+m+"</div></td>";}
s+="</table><div style=\"margin-top:6px;\" class=\"quotes\" id=\"movies_dir\">"+onShowMoviesByPage(1)+"</div><div id=\"movies_box3\" class=\"box3\" style=\"display:none;\"></div></div>";var mw=get_element_id("divMoviesWindow");if(mw!=null){mw.innerHTML=s;}}
var movies_box3=null;function onShowMoviesByPage(p){if(movies_box3==null)
movies_box3=get_element_id("movies_box3");if(movies_box3!=null)
movies_box3.style.display="none";var ps=parseInt(Movies.length/40);if(Movies.length%40>0)
ps++;for(var i=0;i<ps;i++){var p1=i+1;var id="movies_p"+p1;var t=get_element_id(id);if(t!=null){if(p1==p)
t.style.display="";else
t.style.display="none";}}
var s="";for(var j=0;j<ps;j++){if(p==j+1)
s+="<span class=\"current\">"+(j+1)+"</span>";else
s+="<a href=\"#\" onclick=\"javscript:onShowMoviesByPage("+(j+1)+"); return false;\">"+(j+1)+"</a>";}
var movies_dir=get_element_id("movies_dir");if(movies_dir!=null)
movies_dir.innerHTML=s;return s;}
function onFocusMovie(e,l,m,h){if(movies_box3==null)
movies_box3=get_element_id("movies_box3");if(m.length==0){movies_box3.style.display="none";return;}
e.className="box2";var mt=Math.round((90-h)/2);movies_box3.innerHTML="<img src=\""+m+"\" border=\"0\" style=\"margin-top:"+mt+"px;\"/>";if(l==0){movies_box3.style.left=(310-100)+"px";movies_box3.style.top="10px";}
else{movies_box3.style.left="10px";movies_box3.style.top="10px";}
movies_box3.style.display="";}
function onLostFocusMovie(e){e.className="box1";}
function onLostFocusAllMovies(ae){var e=window.event||ae;var s=e.toElement||e.relatedTarget;if(movies_box3==null)
movies_box3=get_element_id("movies_box3");try{if(document.all){if(!ae.contains(s)){movies_box3.style.display="none";}}
else{var res=ae.compareDocumentPosition(s);if(!(res==20||res==0)){movies_box3.style.display="none";}}}
catch(e){}}
function SelectMovie(rc){hideMoviesWindow();var txtInput=get_element_id("txtInput");if(txtInput.value==GetShowText("remark_question")){txtInput.value='';txtInput.style.color="#000000";}
txtInput.value+=rc;}
function closeChatWinPrompt(evnt){if(leaveWords==1||closeWin==1||turnToArtificial==1||bot==1)
return;if(isWin4())
return;if(!closePrompt&&serviceGraded!=1){sendCloseMsg();return;}
if(!evnt&&window.event)
evnt=window.event;var msg="";if(serviceGraded==1&&eakayFeedback()){closeWin=1;MaskOpen();msg=GetShowText("closeChatPrompt1");}
else{msg=GetShowText("closeChatPrompt1");}
if(evnt.returnValue==true)
return msg;else
evnt.returnValue=msg;}
function ConfirmCloseWin(){if(leaveWords!=1){if(window.confirm(GetShowText("closePrompt"))){closeWin=1;if(serviceGraded==1)
MaskOpen();else
closeThisWin();}}
else{closeThisWin();}}
function SpecialSet(){if((SpecialPara&0x8000000)!=0){var liGrade1=get_element_id("liGrade1");if(liGrade1!=null)
liGrade1.style.display="none";}
if((SpecialPara&0x200000)!=0){var tdCapture=get_element_id("divimgCapture");if(tdCapture!=null)
tdCapture.style.display="none";}
if((SpecialPara&0x10000)!=0){var divimgFile=get_element_id("divimgFile");if(divimgFile!=null)
divimgFile.style.display="none";}}
function hideHeader(){var header=get_element_id("header");if(header)
header.style.display="none";var lheader=get_element_id("lheader");if(lheader)
lheader.style.display="none";}
function showWelcomeInfo(msg,name){showMsg(DecodeString(msg),'w')}
function ShowGoodsInfo(msg){showMsg(DecodeString(msg),'goods')}
function showMovies(){if(CheckQueue())
return;var divMoviesWindow=get_element_id("divMoviesWindow");if(divMoviesWindow){divMoviesWindow.style.display="";}}
function hideMoviesWindow(){var divMoviesWindow=get_element_id("divMoviesWindow");if(divMoviesWindow){divMoviesWindow.style.display="none";}}
function ParseMsnMovies(s){if(Movies==null||Movies.length==0)
return old_ParseMovies(s);for(var i=0;i<Movies.length;i++){s=ReplaceSubstring(s,Movies[i].Wildcard,"<img src=\""+Movies[i].fileName+"\" />")}
return s;}
function old_ParseMovies(s){s=ReplaceSubstring(s,":)","<img src=\"images/msn/movies/3a29.gif\" />");s=ReplaceSubstring(s,":D","<img src=\"images/msn/movies/3a44.gif\" />");s=ReplaceSubstring(s,":(","<img src=\"images/msn/movies/3a28.gif\" />");s=ReplaceSubstring(s,";)","<img src=\"images/msn/movies/3b29.gif\" />");s=ReplaceSubstring(s,":-O","<img src=\"images/msn/movies/3a2d4f.gif\" />");s=ReplaceSubstring(s,":P","<img src=\"images/msn/movies/3a50.gif\" />");s=ReplaceSubstring(s,"(H)","<img src=\"images/msn/movies/284829.gif\" />");s=ReplaceSubstring(s,":@","<img src=\"images/msn/movies/3a40.gif\" />");s=ReplaceSubstring(s,":S","<img src=\"images/msn/movies/3a53.gif\" />");s=ReplaceSubstring(s,":$","<img src=\"images/msn/movies/3a24.gif\" />");s=ReplaceSubstring(s,":'(","<img src=\"images/msn/movies/3a2728.gif\" />");s=ReplaceSubstring(s,":|","<img src=\"images/msn/movies/3a7c.gif\" />");s=ReplaceSubstring(s,"(A)","<img src=\"images/msn/movies/284129.gif\" />");s=ReplaceSubstring(s,"8o|","<img src=\"images/msn/movies/386f7c.gif\" />");s=ReplaceSubstring(s,"8-|","<img src=\"images/msn/movies/382d7c.gif\" />");s=ReplaceSubstring(s,"+o(","<img src=\"images/msn/movies/2b6f28.gif\" />");s=ReplaceSubstring(s,"<:o)","<img src=\"images/msn/movies/3c3a6f29.gif\" />");s=ReplaceSubstring(s,"|-)","<img src=\"images/msn/movies/7c2d29.gif\" />");s=ReplaceSubstring(s,"*-)","<img src=\"images/msn/movies/2a2d29.gif\" />");s=ReplaceSubstring(s,":-#","<img src=\"images/msn/movies/3a2d23.gif\" />");s=ReplaceSubstring(s,":-*","<img src=\"images/msn/movies/3a2d2a.gif\" />");s=ReplaceSubstring(s,"^o)","<img src=\"images/msn/movies/5e6f29.gif\" />");s=ReplaceSubstring(s,"8-)","<img src=\"images/msn/movies/382d29.gif\" />");s=ReplaceSubstring(s,"(L)","<img src=\"images/msn/movies/284c29.gif\" />");s=ReplaceSubstring(s,"(U)","<img src=\"images/msn/movies/285529.gif\" />");s=ReplaceSubstring(s,"(M)","<img src=\"images/msn/movies/284d29.gif\" />");s=ReplaceSubstring(s,"(@)","<img src=\"images/msn/movies/284029.gif\" />");s=ReplaceSubstring(s,"(&)","<img src=\"images/msn/movies/282629.gif\" />");s=ReplaceSubstring(s,"(sn)","<img src=\"images/msn/movies/28736e29.gif\" />");s=ReplaceSubstring(s,"(bah)","<img src=\"images/msn/movies/2862616829.gif\" />");s=ReplaceSubstring(s,"(S)","<img src=\"images/msn/movies/285329.gif\" />");s=ReplaceSubstring(s,"(*)","<img src=\"images/msn/movies/282a29.gif\" />");s=ReplaceSubstring(s,"(#)","<img src=\"images/msn/movies/282329.gif\" />");s=ReplaceSubstring(s,"(R)","<img src=\"images/msn/movies/285229.gif\" />");s=ReplaceSubstring(s,"({)","<img src=\"images/msn/movies/287b29.gif\" />");s=ReplaceSubstring(s,"(})","<img src=\"images/msn/movies/287d29.gif\" />");s=ReplaceSubstring(s,"(K)","<img src=\"images/msn/movies/284b29.gif\" />");s=ReplaceSubstring(s,"(F)","<img src=\"images/msn/movies/284629.gif\" />");s=ReplaceSubstring(s,"(W)","<img src=\"images/msn/movies/285729.gif\" />");s=ReplaceSubstring(s,"(O)","<img src=\"images/msn/movies/284f29.gif\" />");return s;}
function resizeMask(){if(isWin4()){if(feedback==1){var divPageFeedback=get_element_id("divPageFeedback");var evaluecontent=get_element_id("evaluecontent");divPageFeedback.style.width=bodyWidth()-20+"px";evaluecontent.style.width=bodyWidth()-56+"px";}}}
function onvaluecontent(){var evaluecontent=get_element_id("evaluecontent");evaluecontent.style.color="#000";if(evaluecontent.value.length>40)
evaluecontent.style.overflow="auto";}
function MaskOpen(){if(queue){alert(GetShowText("queue_alt"));return;}
feedback=1;get_element_id("starScore5").click();get_element_id("aGrade5").click();get_element_id("divPageMask").style.display="block";resizeMask();get_element_id("divPageFeedback").style.display="block";document.documentElement.style.cssText="overflow:none;overflow:auto;_overflow:auto;";}
function MaskClose(){feedback=0;document.documentElement.style.cssText="overflow:none;overflow:hidden;_overflow:hidden;";get_element_id("divPageMask").style.display="none";get_element_id("divPageFeedback").style.display="none";}
function divClose(o){get_element_id(o).style.display="none";get_element_id("divPageMask").style.display="none";}
function onScoreSelected(score,title){if(grade==score)
return;grade=score;if(language=="ch_cn"||language=="ch_tw")
gtemp="  "+score+"分"+"  "+title;else
gtemp="  "+title;get_element_id("gradeSpan").innerHTML=gtemp;}
function scoreMousover(o,title){if(language=="ch_cn"||language=="ch_tw")
gtemp="  "+o+"分"+"  "+title;else
gtemp="  "+title;get_element_id("gradeSpan").innerHTML=gtemp;if(o<3){get_element_id("evaluescore").innerHTML="<style> .score:checked + .star {background-position: 0 -24px !important;}";get_element_id("starBg").className="graystar_bg";get_element_id("gradeDiv").className="badscore";}
else{get_element_id("evaluescore").innerHTML="";get_element_id("starBg").className="star_bg";get_element_id("gradeDiv").className="goldscore";}}
function starMousout(){get_element_id("gradeSpan").innerHTML=gtemp;if(grade<3){get_element_id("evaluescore").innerHTML="<style> .score:checked + .star {background-position: 0 -24px !important;}";get_element_id("starBg").className="graystar_bg";get_element_id("gradeDiv").className="badscore";}
else{get_element_id("evaluescore").innerHTML="";get_element_id("starBg").className="star_bg";get_element_id("gradeDiv").className="goldscore";}}
function onEvaluationSubmit(){alert(GetShowText("FeedbackAlt"));if(grade=="0")
grade="5";serviceGraded=0;if(closeWin==1||special=="12366"){if(special=="12366")
showMsg(GetShowText("finishChatSession"),'s');sendCloseMsg();window.setTimeout(function(){closeThisWin();},500);}
else{sendFeedback();}}
function SwitchleaveWord(close,leaveNotice){leaveWords=1;if((typeof(close)=="undefined"||!close)&&noleaveWord){showMsg(noLeaveNotice,'s');return;}
else{if(typeof(close)!="undefined"&&close){noleaveWord=close;if(typeof(leaveNotice)!="undefined"&&trim(leaveNotice).length>0)
noLeaveNotice=DecodeString(leaveNotice);else
noLeaveNotice=GetShowText("leave_alt");alert(noLeaveNotice);closeThisWin();return;}}
UpdateLeaveWordLang();hideMainView();showLeaveWord("");if(Select)
closeSelectService();}
function focusInputEle(o,m){var remark="remark"
if(typeof(m)!="undefined")
remark=m;var t=GetShowText(remark);if(o.value==t){o.value='';o.style.color="#7d7d7d";}}
function blurInputEle(o,m){if(o.value==''){var remark="remark"
if(typeof(m)!="undefined")
remark=m;var t=GetShowText(remark);o.value=t;o.style.color="#bcbccc";}}
function onLeaveWordSubmit(){var txtNickName=get_element_id("txtNickName");var txtPhone=get_element_id("txtPhone");var txtEmail=get_element_id("txtEmail");var txtContent=get_element_id("txtContent");var txtMobile=get_element_id("txtMobile");var txtQQ=get_element_id("txtQQ");var txtSkype=get_element_id("txtSkype");var txtMemberID=get_element_id("txtMemberID");var txtAddress=get_element_id("txtAddress");var trOtherItem=get_element_id("trOtherItem");var g=new JSONArg("leaveword");g.name=txtNickName.value;g.content=txtContent.value;g.Phone=txtPhone.value;g.email=txtEmail.value;g.mobile=txtMobile.value;g.qq=txtQQ.value;g.skype=txtSkype.value;g.msn=txtMemberID.value;g.address=txtAddress.value;g.OtherItem=trOtherItem.value;if(g.name==GetShowText('remark_name'))
g.name="";if(g.content==GetShowText('remark_content'))
g.content="";if(g.Phone==GetShowText('remark_phone'))
g.Phone="";if(g.email==GetShowText('remark_email'))
g.email="";if(g.mobile==GetShowText('remark_mobile'))
g.mobile="";if(g.qq==GetShowText('remark_qq'))
g.qq="";if(g.skype==GetShowText('remark_skype'))
g.skype="";if(g.msn==GetShowText('remark_memberID'))
g.msn="";if(g.address==GetShowText('remark_address'))
g.address="";if(g.OtherItem==GetShowText('remark_input'))
g.OtherItem="";if((lwRequire&0x01)!=0&&(lwRequire&0x02)!=0&&trim(g.name).length<2){alert(GetShowText("namePrompt"));return;}
if((lwRequire&0x100)!=0&&(lwRequire&0x200)!=0&&trim(g.address).length==0){alert(GetShowText("remark_address"));return;}
if((lwRequire&0x4000)!=0&&(lwRequire&0x8000)!=0&&trim(g.skype).length==0){alert(GetShowText("remark_skype"));return;}
if((lwRequire&0x10000)!=0&&(lwRequire&0x20000)!=0&&trim(g.msn).length==0){alert(GetShowText("remark_memberID"));return;}
if((lwRequire&0x40)!=0&&(lwRequire&0x80)!=0){if(trim(g.email).length==0){alert(GetShowText("emailPrompt"));return;}
re=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;if(!re.exec(trim(g.email))){alert(GetShowText("emailError"));return;}}
if((lwRequire&0x400)!=0&&(lwRequire&0x800)!=0){re=/[1-9][0-9]{4,}/;if(!re.exec(g.qq)){alert(GetShowText("qqError"));return;}}
if((lwRequire&0x04)!=0&&(lwRequire&0x08)!=0&&trim(g.mobile).length==0){alert(GetShowText("phonePrompt"));return;}
if((lwRequire&0x10)!=0&&(lwRequire&0x20)!=0&&trim(g.Phone).length==0){alert(GetShowText("phonePrompt"));return;}
if(trim(g.mobile).length>0){var m1=/^(13[0-9]|147|15[0-9]|16[0-9]|17[0-9]|18[0-9])\d{8}$/;if(!m1.test(g.mobile)){alert(GetShowText("phonePrompt"));return;}}
if(trim(g.content).length<6){alert(GetShowText("leaveWordError"));return;}
sendDataCallServer(EncodeString(JSON.stringify(g)));alert(GetShowText("leaveWordSucceed"));txtNickName.value="";blurInputEle(txtNickName,'remark_name_m')
txtContent.value="";blurInputEle(txtContent,'remark_content_m')
txtPhone.value="";blurInputEle(txtPhone,'remark_phone_m')
txtEmail.value="";blurInputEle(txtEmail,'remark_email_m')
txtMobile.value="";blurInputEle(txtMobile,'remark_mobile_m')
txtQQ.value="";blurInputEle(txtQQ,'remark_qq_m')
txtSkype.value="";blurInputEle(txtSkype,'remark_skype_m')
txtMemberID.value="";blurInputEle(txtMemberID,'remark_memberID_m')
txtAddress.value="";blurInputEle(txtAddress,'remark_address_m')
trOtherItem.value="";blurInputEle(trOtherItem,'remark_input_m')}
function doleaveWordResult(arg){var pathname=window.location.pathname;if(pathname.indexOf("newChatWin5")>0)
closeThisWin();else
UpdateLeaveWordLang();}
function setLeaveWordPara(leaveWordNotice,lLeaveWordRequire){var litLeaveWordNotice=get_element_id("litLeaveWordNotice");lwRequire=lLeaveWordRequire;if(litLeaveWordNotice!=null)
litLeaveWordNotice.innerHTML=DecodeString(leaveWordNotice);var txtNickName=get_element_id("ddNickName");var txtPhone=get_element_id("ddPhone");var txtEmail=get_element_id("ddEmail");var txtMobile=get_element_id("ddMobile");var txtQQ=get_element_id("ddQQ");var txtSkype=get_element_id("ddSkype");var txtMemberID=get_element_id("ddMemberID");var txtAddress=get_element_id("ddAddress");var trOtherItem=get_element_id("ddOtherItem");if(txtNickName!=null&&(lwRequire&0x01)!=0){txtNickName.style.display="block";}
if(txtPhone!=null&&(lwRequire&0x10)!=0){txtPhone.style.display="block";}
if(txtEmail!=null&&(lwRequire&0x40)!=0){txtEmail.style.display="block";}
if(txtMobile!=null&&(lwRequire&0x04)!=0){txtMobile.style.display="block";}
if(txtQQ!=null&&(lwRequire&0x400)!=0){txtQQ.style.display="block";}
if(txtSkype!=null&&(lwRequire&0x4000)!=0){txtSkype.style.display="block";}
if(txtMemberID!=null&&(lwRequire&0x10000)!=0){txtMemberID.style.display="block";}
if(txtAddress!=null&&(lwRequire&0x100)!=0){txtAddress.style.display="block";}
if(trOtherItem!=null&&(lwRequire&0x40000)!=0){trOtherItem.style.display="block";}
var spNickNameStar=get_element_id("spNickNameStar");var spMobileStar=get_element_id("spMobileStar");var spPhoneStar=get_element_id("spPhoneStar");var spEmailStar=get_element_id("spEmailStar");var spAddressStar=get_element_id("spAddressStar");var spQQStar=get_element_id("spQQStar");var spSkypeStar=get_element_id("spSkypeStar");var spMemberIDStar=get_element_id("spMemberIDStar");var spOtherItemStar=get_element_id("spOtherItemStar");if(spNickNameStar!=null&&(lwRequire&0x02)!=0){spNickNameStar.style.display="";}
if(spMobileStar!=null&&(lwRequire&0x08)!=0){spMobileStar.style.display="";}
if(spPhoneStar!=null&&(lwRequire&0x20)!=0){spPhoneStar.style.display="";}
if(spEmailStar!=null&&(lwRequire&0x80)!=0){spEmailStar.style.display="";}
if(spAddressStar!=null&&(lwRequire&0x200)!=0){spAddressStar.style.display="";}
if(spQQStar!=null&&(lwRequire&0x800)!=0){spQQStar.style.display="";}
if(spSkypeStar!=null&&(lwRequire&0x8000)!=0){spSkypeStar.style.display="";}
if(spMemberIDStar!=null&&(lwRequire&0x20000)!=0){spMemberIDStar.style.display="";}
if(spOtherItemStar!=null&&(lwRequire&0x80000)!=0){spOtherItemStar.style.display="";}}
function switcHelp(obj){var oSp=get_element_id(obj);if(oSp)
oSp.style.display=oSp.style.display=="none"?"":"none";var panelContent=get_element_id("panelContent");if(panelContent)
panelContent.scrollTop=panelContent.scrollHeight;}
function getKnowledgeContent(dirID){webcallLock.async.lock("sendDataCallServer",function(){onSend=true;var g=new JSONArg("knw");g.content=dirID;sysClosed=0;sendDataCallServer(EncodeString(JSON.stringify(g)));});}
function getSwitchFileName(){var pathname=window.location.pathname;var f;if(bot==1){f="newChatWin4.aspx";if(pathname.indexOf("newRobotWin5")>0)
f="newChatWin5.aspx";}
else{f="newRobotWin4.aspx";if(pathname.indexOf("newChatWin5")>0)
f="newRobotWin5.aspx";}
return f;}
function SwitchOnlineService(q,rb){if(special=="12366"&&user_stat=="0"){alert(noLeaveNotice);return;}
if(typeof(oldRobotStyle)=="undefined"){if(typeof(rb)=="undefined"&&bot==0)
return;isSwitch=bot;if(bot==1){if(lt_prevent=="1"&&typeof(rb)=="undefined"&&lt_prevent_msg.length>0){showMsg(lt_prevent_msg,'s');return;}
bot=0;turnToArtificial=1;sendCloseMsg();UpdateLang();var switchOnline=get_element_id("switchOnline");if(switchOnline!=null)
switchOnline.style.display="none";}
else{sendCloseMsg();bot=1;UpdateLang();showMainView();showLeaveWord("none");sysClosed=0;}
ChatEnter();}
else{if(bot==1){turnToArtificial=1;var qu="";if(typeof(q)!="undefined"&&q.length>0)
qu="&question="+escape(q);window.location.href=getSwitchFileName()+window.location.search.replace("&UserID=-1","").replace("?UserID=-1&","?")+"&from=robot"+qu;}
else{window.location.href=getSwitchFileName()+window.location.search.replace("&from=robot","").replace(/((&)?)listGroup=[^\?|&]*(^&)?/g,"");}}}
function closeOnlineClick(){var divClose=get_element_id("divClose");var closeConfirm=get_element_id("closeConfirm");console.log(bgcolor);if(divClose!=null){closeConfirm.style.cssText='background: '+bgcolor+';';get_element_id("divPageMask").style.display="block";divClose.style.display="block";}}
function closeConfirm(){if(leaveWords!=1){get_element_id("divPageMask").style.display="none";var divClose=get_element_id("divClose");if(divClose!=null)
divClose.style.display="none";closeWin=1;if(bot!=1&&serviceGraded==1&&eakayFeedback()&&!init){MaskOpen();}
else{sendCloseMsg();closeThisWin();}}
else{closeThisWin();}}
function closeCancel(){get_element_id("divPageMask").style.display="none";get_element_id("divClose").style.display="none";}
function ShowLeaveWordPanel(){if(typeof(oldRobotStyle)=="undefined"){SwitchleaveWord();}
else{leaveWords=1;window.location.href=getSwitchFileName()+window.location.search.replace("&UserID=-1","").replace("?UserID=-1&","?")+"&from=robot";}}
var txtInputCheck=null;var divSendCheck=null;function onInputChanged(){if(txtInputCheck==null)
txtInputCheck=get_element_id("txtInput");if(divSendCheck==null)
divSendCheck=get_element_id("divSend");if(txtInputCheck.value.length==0){if(get_element_id("divSend").className!="ks-send-message")
get_element_id("divSend").className="ks-send-message";}
else{if(get_element_id("divSend").className!="ks-send-message send-ok")
get_element_id("divSend").className="ks-send-message send-ok";}}
setInterval(onInputChanged,500);function SaveChatlog(){if(CheckQueue())
return;var divDoCapture=get_element_id("divDoCapture");var frameChild=null;if(divDoCapture!=null){frameChild=$365_t(divDoCapture,"IFRAME","iframeChild");}
if(frameChild!=null){frameChild.src="downloadChatlog.aspx?SessionID="+_365groups_SessionID;}}
function doWebCaptureInstall(arg){WebCaptureInstalled=true;}
function divDoCaptureFromIframe(c){if(document.location.protocol=="https:")
return;if(c=="0"&&WebCaptureInstalled)
return;var frameChild=null;var divDoCapture=get_element_id("divDoCapture");if(divDoCapture!=null){frameChild=$365_t(divDoCapture,"IFRAME","iframeChild");}
if(frameChild!=null){var src="http://127.0.0.1:8033/capturescreen.aspx?param="+captureParam+"&capture="+c+"&timeStamp="+new Date().getTime().toString();frameChild.src=src;}
if(c=="0"&&((SpecialPara&0x10000000)!=0))
window.setTimeout("divDoCaptureFromIframe('0')",3000);}
function showMainView(){get_element_id("ourView").style.display="";}
function hideMainView(){get_element_id("ourView").style.display="none";}
function showLeaveWord(d){get_element_id("divLeaveWord").style.display=d;}
function showPicture(o){var pictureDetaile=get_element_id("pictureDetaile");if(pictureDetaile){showImg=o;showDiv=1;hideMainView();pictureDetaile.style.display="";get_element_id("imgDetaile").src=o.src;}}
function hiddenPicture(){showDiv=0;showMainView();get_element_id("pictureDetaile").style.display="none";goToBottom();}
function showPinfor(){showDiv=2;hideMainView();get_element_id("workerDetaile").style.display="";}
function hiddenPinfor(){showDiv=0;showMainView();get_element_id("workerDetaile").style.display="none";goToBottom();}
function getBgcolor(bgColor){alert(bgColor);var str='<style>#panelContent .msgVisitor div:before{border-color: transparent '+bgColor+';}'+'#panelContent .msgVisitor div{background: '+bgColor+';}'+'.navbar{background: '+bgColor+';}</style>';document.write(str);}
function ShowSelectService(selectScript){var divSelectService=get_element_id("divSelectService");Select=false;if(divSelectService){divSelectService.style.maxHeight=(bodyHeight()-50)+"px";divSelectService.innerHTML=selectScript;Select=true;}}
function openSelectService(){var divSelectService=get_element_id("divSelectService");get_element_id("divPageMask").style.display="block";divSelectService.style.display="block";divSelectService.style.left=(bodyWidth()-divSelectService.offsetWidth)/2+"px";divSelectService.style.top=(bodyHeight()-divSelectService.offsetHeight)/2+"px";}
function closeSelectService(){var divSelectService=get_element_id("divSelectService");divSelectService.style.display="none";get_element_id("divPageMask").style.display="none";}
function openChatWin(sltGroup,sltUserID){if(sltUserID==-1){if(typeof(oldRobotStyle)=="undefined"){bot=1;UpdateLang();ChatEnter();closeSelectService();return;}
else{window.location.href=getSwitchFileName()+window.location.search;}}
if(sysClosed==0&&isSwitch!=1){alert("您已经在会话中了，不需要重复选择客服，谢谢!");return;}
s_UserID=sltUserID;s_listGroup=sltGroup;closeSelectService();initSendToServer();}
function setrightVideo(videoUrl){var videoIframe=get_element_id("videoIframe");if(videoIframe==null)
return;var Indepwiframe=$365_t(videoIframe,"IFRAME","Indepwiframe");var swidth=document.body.clientWidth;videoIframe.style.height=swidth/16*9+"px";videoIframe.style.display="block";if(typeof(videoUrl)!="undefined"){Indepwiframe.src="hkvideo/video.html?file="+videoUrl+"&swidth="+swidth+"&mobile=true";}}
function onKnClose(){div_kn.style.display="none";InputTextForSuggest="_365webcallSuggestExit";return false;}
function onKnEsc(){if(div_kn.style.display=="none"||show_kn.length==0)
return false;div_kn.style.display="none";return true;}
function keyDown(evt){evt=evt?evt:(window.event?window.event:null);if(evt.keyCode==38){if(onKnUpKey())
return false;}
if(evt.keyCode==40){if(onKnDownKey())
return false;}
if(evt.keyCode==27){if(onKnEsc())
return false;}
return true;}
function keypress(textInput,evt){if(autoPrompt!=null&&nochat_Interval>=10&&nochat_Content.length>0){clearTimeout(autoPrompt);autoPrompt=setTimeout('sendAutoPrompt()',nochat_Interval*1000);}
if(textInput.value.length>400){evt.keyCode=0;alert(GetShowText("txtLenghtLimit"));return false;}
evt=evt?evt:(window.event?window.event:null);if(postkey==1){if(!evt.shiftKey&&evt.keyCode==13){if(!onKnEnter())
SendMsg();return false;}}
if(postkey==2){if(evt.ctrlKey&&evt.keyCode==10){SendMsg();return false;}}
return true;}
function onKnEnter(){if(div_kn.style.display=="none")
return false;var i;for(i=0;i<show_kn.length;i++){if(show_kn[i]["slt"]==1)
break;}
if(i<show_kn.length){try{if(show_kn[i]["c"].length>0){showMsg(show_kn[i]["t"],'v');showMsg(show_kn[i]["c"],'w');kTxtInput.value="";}
else{kTxtInput.value=show_kn[i]["t"];InputTextForSuggest=show_kn[i]["t"];}
div_kn.style.display="none";return true;}
catch(e){}}
return false;}
function onKnUpKey(){if(div_kn.style.display=="none"||show_kn.length==0)
return false;var i;for(i=0;i<show_kn.length;i++){if(show_kn[i]["slt"]==1)
break;}
try{if(i<show_kn.length){show_kn[i]["slt"]=0;show_kn[i]["obj"].className=show_kn[i]["obj"].className.split(" ")[0];i--;if(i<0)
i=show_kn.length-1;show_kn[i]["slt"]=1;show_kn[i]["obj"].className=show_kn[i]["obj"].className+" ac_over";}
else{show_kn[0]["slt"]=1;show_kn[0]["obj"].className=show_kn[0]["obj"].className+" ac_over";}
return true;}
catch(e){}
return false;}
function onKnDownKey(){if(div_kn.style.display=="none"||show_kn.length==0)
return false;var i;for(i=0;i<show_kn.length;i++){if(show_kn[i]["slt"]==1)
break;}
try{if(i<show_kn.length){show_kn[i]["slt"]=0;show_kn[i]["obj"].className=show_kn[i]["obj"].className.split(" ")[0];i++;if(i>=show_kn.length)
i=0;show_kn[i]["slt"]=1;show_kn[i]["obj"].className=show_kn[i]["obj"].className+" ac_over";}
else{show_kn[0]["slt"]=1;show_kn[0]["obj"].className=show_kn[0]["obj"].className+" ac_over";}
return true;}
catch(e){}
return false;}
function onKnSend(obj){var i;for(i=0;i<show_kn.length;i++){if(show_kn[i]["obj"]==obj)
break;}
if(i<show_kn.length){if(typeof(show_kn[i]["c"])!="undefined"&&show_kn[i]["c"].length>0){showMsg(show_kn[i]["t"],'v');showMsg(show_kn[i]["c"],'w');kTxtInput.value="";}
else{kTxtInput.value=show_kn[i]["t"];InputTextForSuggest=show_kn[i]["t"];}
div_kn.style.display="none";kTxtInput.focus();}}
function countSubstr(str,substr,isIgnore){var count=0;var reg="";try{if(isIgnore==true){reg="/"+substr+"/gi";}
else{reg="/"+substr+"/g";}
reg=eval(reg);if(str.match(reg)==null){count=0;}
else{count=str.match(reg).length;}}
catch(e){}
return count;}
function k(t,k,tp,kp,n){try{var newData=new Object;newData["title"]=DecodeString(t);newData["key"]=DecodeString(k);newData["title_py"]=DecodeString(tp);newData["key_py"]=DecodeString(kp);newData["num"]=n;kn.push(newData);}
catch(e){}}
function getKnow(c){c=c.replace(/[\r\n]/g,"");var n=0;show_kn.splice(0,show_kn.length);for(var i=0;i<kn.length;i++){h=trim(kn[i]["title"]+" "+kn[i]["title_py"]);n=countSubstr(h,c,true);h=trim(kn[i]["key"]+" "+kn[i]["key_py"]);var keys=h.split(/\s+/);for(var j=0;j<keys.length;j++){n+=countSubstr(c,keys[j],true);}
if(n>0){var nd=new Object;nd["t"]=kn[i]["title"];nd["n"]=n;nd["num"]=kn[i]["num"];nd["obj"]="";nd["slt"]=0;show_kn.push(nd);}}
if(show_kn.length==0){div_kn.style.display="none";return;}
show_kn=show_kn.sort(function(a,b){return b["n"]-a["n"]});showGuide(show_kn,c);}
function doShowKnowGuide(arg){if(arg.content.length==0){div_kn.style.display="none";return;}
var t=arg.content.split("|");if(t.length<=1){div_kn.style.display="none";return;}
var c=DecodeString(t[0]);show_kn.splice(0,show_kn.length);for(var i=1;i<t.length;i++){var nd=new Object;var k=t[i].split("<;>");nd["t"]=DecodeString(k[0]);nd["n"]=i;nd["num"]="0";nd["obj"]="";nd["slt"]=0;if(k.length>1)
nd["c"]=DecodeString(k[1]);else
nd["c"]="";show_kn.push(nd);}
showGuide(show_kn,c);}
function showGuide(show_kn,c){var reg="";reg="/("+c+")/gi";reg=eval(reg);if(ul_kn==null)
ul_kn=get_element_id("ulKnowledge");if(ul_kn!=null){div_kn.removeChild(ul_kn);ul_kn=document.createElement("ul");ul_kn.style.maxHeight="180px";ul_kn.style.overflow="auto";ul_kn.setAttribute("id","ulKnowledge");div_kn.appendChild(ul_kn);var li;for(var i=0;i<show_kn.length;i++){li=document.createElement("li");li.className=(i%2==0?"ac_even":"ac_odd");li.innerHTML=show_kn[i]["t"].replace(reg,"<strong><font color=\"red\">$1</font></strong>");li.onclick=function(){onKnSend(this);};show_kn[i]["obj"]=li;ul_kn.appendChild(li);}}
div_kn.style.display="";}
function showKnowInfo(){if(InputTextForSuggest=="_365webcallSuggestExit")
return;if(!knowGuide&&kn.length==0)
return;if(kTxtInput==null)
kTxtInput=get_element_id("txtInput");if(InputTextForSuggest!=kTxtInput.value){if(div_kn==null)
div_kn=get_element_id("divKnowledge");if(div_kn==null)
return;InputTextForSuggest=kTxtInput.value;if(InputTextForSuggest.length==0){div_kn.style.display="none";}
else{if(knowGuide){getGuide(InputTextForSuggest);}
else{getKnow(InputTextForSuggest);}}}
if(getKnowledgePrompt!=null){clearTimeout(getKnowledgePrompt);}
if(knowGuide)
getKnowledgePrompt=setTimeout('showKnowInfo()',1000);else
getKnowledgePrompt=setTimeout('showKnowInfo()',400);}
function getGuide(msg){var g=new JSONArg("guide");g.content=msg;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function doInsertKnowTitle(arg){if(arg.content.length>0){eval(arg.content);if(getKnowledgePrompt==null)
showKnowInfo();initGetKnowlege(arg.nIndex);}}
function initGetKnowlege(idx){if(bot!=1&&special=="12366")
return;if(knowGuide){if(getKnowledgePrompt==null)
showKnowInfo();return;}
var g=new JSONArg("know");g.nIndex=idx;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function setSize(){var panelContent=get_element_id("panelContent");var call_toolbar=get_element_id("call_toolbar");var rightInfo=get_element_id("rightInfo");var showInfo=get_element_id("showInfo");var showUrl=get_element_id("showUrl");var showUrlIframe=get_element_id("showUrlIframe");var divKnowledge=get_element_id("divKnowledge");var divremotetip=get_element_id("divremotetip");var divPageFeedback=get_element_id("divPageFeedback");var spSwitchWin=get_element_id("spSwitchWin");var divClose=get_element_id("divClose");var LeaveWordInfo=get_element_id("LeaveWordInfo");var height=document.documentElement.clientHeight;var width=document.documentElement.clientWidth;divPageFeedback.style.marginLeft=(width-380)/2+"px";if(divClose!=null)
divClose.style.marginLeft=(width-292)/2+"px";call_toolbar.style.height="145px";if(height<450){panelContent.style.height=(height-(special=="12366"?205:185))+"px";if(showInfo!=null)
showInfo.style.height=(height-85)+"px";if(rightInfo!=null)
rightInfo.style.height=(height-55)+"px";if(showUrl!=null){if(special=="jingyu")
showUrl.style.height=(height-55)+"px";else
showUrl.style.height=(height-85)+"px";}
if(showUrlIframe!=null)
showUrlIframe.style.height=(height-85)+"px";if(spSwitchWin!=null)
spSwitchWin.style.marginTop=-(height-199)/2+"px";}
else if(height>524){panelContent.style.height=(height-(special=="12366"?230:210))+"px";if(showInfo!=null)
showInfo.style.height=(height-85)+"px";if(rightInfo!=null)
rightInfo.style.height=(height-55)+"px";if(showUrl!=null){if(special=="jingyu")
showUrl.style.height=(height-55)+"px";else
showUrl.style.height=(height-85)+"px";}
if(showUrlIframe!=null){if(special=="jingyu")
showUrlIframe.style.height=(height-55)+"px";else
showUrlIframe.style.height=(height-85)+"px";}
if(spSwitchWin!=null)
spSwitchWin.style.marginTop=-(height-199)/2+"px";}
else{panelContent.style.height=(special=="12366"?300:320)+"px";showInfo.style.height=470+"px";rightInfo.style.height=470+"px";showUrl.style.height=450+"px";showUrlIframe.style.height=450+"px";spSwitchWin.style.marginTop=-161+"px";}
if(rightInfo.style.display=="none"){spSwitchWin.style.display=="none"
panelContent.style.width=(width-10)+"px";call_toolbar.style.width=width+"px";divKnowledge.style.width=width+"px";LeaveWordInfo.style.width=width+"px";}
else{if(special=="jingyu")
spSwitchWin.style.display="none";else
spSwitchWin.style.display="";if(width>730){if(special=="jingyu")
panelContent.style.width=(width-242)+"px";else
panelContent.style.width=(width-250)+"px";call_toolbar.style.width=(width-240)+"px";LeaveWordInfo.style.width=(width-240)+"px";}
else{if(special=="jingyu")
panelContent.style.width=(width-242)+"px";else
panelContent.style.width=480+"px";call_toolbar.style.width=490+"px";LeaveWordInfo.style.width=490+"px";}
divKnowledge.style.width=(width-240)+"px";if(divremotetip!=null)
divremotetip.style.width=(width-280)+"px";}}
function switchPanel(){var rightInfo=get_element_id("rightInfo");var spSwitchWin=get_element_id("spSwitchWin");if(ifShowRight==0&&rightInfo!=null){ifShowRight=1;rightInfo.style.display="none";spSwitchWin.style.cssText="background: url(./images/newChat3/floatwin/close2.png) no-repeat top  !important;margin-right:0px";}
else if(ifShowRight==1&&rightInfo!=null){ifShowRight=0;rightInfo.style.display="";spSwitchWin.style.cssText="background: url(./images/newChat3/floatwin/close1.png) no-repeat top  !important;margin-right:240px";}
setSize();}
function Capture(){if(CheckQueue())
return;if(hold){showMsg(GetShowText("holdBackHintText"),'s');return;}
if(typeof(captureParam)=="undefined")
return;if(special=="12366"){alert("请使用电脑截图快捷键截图，一般为alt+a");return;}
if(captureParam.length==0){alert(GetShowText("capture_alt"));return;}
if(!WebCaptureInstalled){if(checkWebCaptureLoadTime()){var src="CaptureHelp_en.htm";if(ChatLanguage=="0"||ChatLanguage=="1")
src="CaptureHelp.htm";window.open(src);}
return;}
divDoCaptureFromIframe("1");}
function checkWebCaptureLoadTime(){var timeDiff=(_365groups_CallServerTimeSpan+3000)-parseInt(new Date()-WebCaptureInitTime);if(timeDiff>0){alert(GetShowText("WebCaptureLoadTime_prompt")+(Math.round(timeDiff/1000*100)/100));return false;}
return true;}
var iframePlayAudio=null;function callApp(){if(iframePlayAudio==null){var divPlayAudio=get_element_id("divPlayAudio");if(divPlayAudio!=null){iframePlayAudio=$365_t(divPlayAudio,"IFRAME","iframePlayAudio");}}
if(iframePlayAudio!=null)
iframePlayAudio.src="playad.html?msgtype=1";}
var TitleMsgTimeoutID=null;function showTitleMsg(){var timespan=2000;var titleMsg="[... ... ... ...]";if(window.document.title==titleMsg||!TitleMsgType){TitleMsgType=false;window.document.title="["+GetShowText("haveMessage")+"]....";timespan=1000;}
else{window.document.title=titleMsg;timespan=500;}
TitleMsgType=true;if(TitleMsgTimeoutID!=null)
window.clearTimeout(TitleMsgTimeoutID);TitleMsgTimeoutID=window.setTimeout("showTitleMsg()",timespan);}
function stopTitleMsg(){if(TitleMsgTimeoutID!=null)
window.clearTimeout(TitleMsgTimeoutID);window.document.title=page_title;TitleMsgType=false;}
function onvaluecontent(){var evaluecontent=get_element_id("evaluecontent");evaluecontent.style.color="#000";if(evaluecontent.value.length>40)
evaluecontent.style.overflow="auto";}
function SetPanel(cont){}
function ShowAdList(adString,marquee){}
function setOnResize(){}
function HideRotButton(){var switchOnline=get_element_id("switchOnline");if(switchOnline!=null)
switchOnline.style.display="none";var lwsSwitchOnline=get_element_id("lwsSwitchOnline");if(lwsSwitchOnline!=null)
lwsSwitchOnline.style.display="none";}
function getElementsByClassName(className,tagName){if(document.getElementsByClassName){return document.getElementsByClassName(className);}
else{var ele=[],all=document.getElementsByTagName(tagName||"*");for(var i=0;i<all.length;i++){if(all[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){ele[ele.length]=all[i];}}
return ele;}}
function CheckQueue(at){if(QueueChatWaitTime>0&&queue){if(typeof(at)=="undefined")
alert(GetShowText("queue_alt"));return true;}
return false;}
function SetHisMsgFunction(){offmsg=true;var contentScroll=get_element_id("contentScroll");contentScroll.onscroll=onContentScroll;}
var ScrollTopTimes=0;function onContentScroll(){if(this.scrollTop==0){if(ScrollTopTimes>0){morehsMsg();}
else{ScrollTopTimes++;this.scrollTop=5;}}}
function morehsMsg(){var morehsMsg=get_element_id("morehsMsg");if(morehsMsg)
morehsMsg.parentNode.removeChild(morehsMsg);contentScroll.onscroll=function(){};var hsloader=get_element_id("hsloader");if(!hsloader)
get_element_id("panelContent").innerHTML='<div id="hsloader" class=\"msgTime\"><img src="images/mobile-loader.gif" style="max-height:20px;"/></div>'+get_element_id("panelContent").innerHTML;setTimeout('GethisMsg()',10);return;}
function initGetMovies(){if((bot!=1&&special=="12366")||Movies==null||Movies.length==0){var g=new JSONArg("movies");sendDataCallServer(EncodeString(JSON.stringify(g)));}}
function GethisMsg(){var strUrl="getHisMsg.aspx?param="+EncodeString(_365groups_SessionID)+"&callback=ShowhsMsg";getDataFromServer(strUrl,"Get_HisMsg");}
function ShowhsMsg(arg){var hsMsg="";var hsloader=get_element_id("hsloader");var morehsMsg=get_element_id("morehsMsg");if(morehsMsg)
morehsMsg.parentNode.removeChild(morehsMsg);if(arg.content.length>0){var msgs=arg.content.split("<;>");for(var i=0;i<msgs.length;i++){var args=msgs[i].split("<|>");if(args.length>=4){hsMsg+=GetMsgstr(args[0],haveFace,args[2],args[1],args[3]);}
else if(args.length>=3){hsMsg+=GetMsgstr(args[0],haveFace,args[2],args[1]);}}
var hsdivider=get_element_id("hsdivider");if(!hsdivider)
hsMsg+="<div id=\"hsdivider\" class=\"hsdivider\"><div class=\"mask\"></div><p>"+GetShowText("hisMsg_alt1")+"</p></div>";if(hsloader)
hsloader.parentNode.removeChild(hsloader);var reg=/<img([^>]*id[=\"\'\s]+([^\"\']*)[\"\'][^>]*src[=\'\"\s]+([^\"\']*)[\"\'])?[^>]*>/gi;var imgsrcarr=new Array();var imgidarr=new Array();while(reg.exec(hsMsg)){imgsrcarr.push(RegExp.$3);imgidarr.push(RegExp.$2);}
if(panelContent==null)
panelContent=get_element_id("panelContent");panelContent.innerHTML="<div id=\"morehsMsg\" class=\"msgTime\"><a href=\"javascript:morehsMsg()\">"+GetShowText("hisMsg_alt2")+"</a></div>"+hsMsg+panelContent.innerHTML;var contentScroll=get_element_id("contentScroll");contentScroll.scrollTop=10;contentScroll.onscroll=onContentScroll;}
else{if(hsloader)
hsloader.parentNode.removeChild(hsloader);var contentScroll=get_element_id("contentScroll");panelContent.innerHTML='<div class="msgTime"><p>'+GetShowText("noMore_alt")+'</p></div>'+panelContent.innerHTML;}}
function onlineVringbell(nickName,vv,roomNo){if(typeof(OnlineVideoAppID)=="undefined")
return;var profile=30;if(typeof(OnlineVideoProfile)!="undefined")
profile=OnlineVideoProfile;onlineVideo=vv;showOnlineVideoMsg(1);get_element_id("online_v_becallingbox").src="agora/becallingbox.html?rn="+roomNo+"&isv="+vv+"&key="+OnlineVideoAppID+"&vp="+profile;setTimeout(function(){get_element_id("divPageMask").style.display="block";get_element_id("online_v_tinybox").style.display="block";},500);}
function openAudio(){if(typeof(OnlineVideoAppID)=="undefined")
return;var profile=30;if(typeof(OnlineVideoProfile)!="undefined")
profile=OnlineVideoProfile;get_element_id("online_v_becallingbox").src="agora/becallingbox.html?rn=&isv=2&key="+OnlineVideoAppID+"&vp="+profile;setTimeout(function(){get_element_id("divPageMask").style.display="block";get_element_id("online_v_tinybox").style.display="block";},500);}
function onCloseOnlineVideo(isvideo){showOnlineVideoMsg(3);if(isvideo)
sendCloseOnlineVideoMsg("客户结束在线视频",3);else
sendCloseOnlineVideoMsg("客户结束在线语音",2);}
function sendCloseOnlineVideoMsg(msg,online){var g=new JSONArg("closeonlinevideomsg");g.content=msg;g.action=online;sendDataCallServer(EncodeString(JSON.stringify(g)));}
var online_v_handler=null;function getvoiceParam(windowValue,roomNo){online_v_handler=windowValue;showOnlineVideoMsg(5);onlineVideoTime=new Date();recordFile="ovv_"+new Date().getTime().toString()+".mp4";callRecord(OnlineVideoAppID,roomNo,recordFile);}
function closeOnlineVideoOrVoice(){if(online_v_handler==null)
return;online_v_handler.close();online_v_handler=null;showOnlineVideoMsg(2);}
function showOnlineVideoMsg(f){var msgStr1="",msgStr2="",s="",file="";if(f==0){s=parseInt(((new Date()).getTime()-onlineVideoTime.getTime())/1000);file="http://sp1.365webcall.com/video/"+recordFile;msgStr1="与客服"+lbNickName+(onlineVideo==1?"视频":"语音")+"通话时长"+s+'秒';;msgStr2="与客人"+ClientName+(onlineVideo==1?"视频":"语音")+"通话时长"+s+'秒';}
else if(f==1)
msgStr1=msgStr2="客服"+lbNickName+"发起"+(onlineVideo==1?"视频":"语音")+"通话";else if(f==2)
msgStr1=msgStr2="客服"+lbNickName+"关闭"+(onlineVideo==1?"视频":"语音")+"通话";else if(f==3){msgStr1="您关闭"+(onlineVideo==1?"视频":"语音")+"通话";msgStr2=ClientName+"关闭"+(onlineVideo==1?"视频":"语音")+"通话";}
else if(f==4){msgStr1="您拒绝"+(onlineVideo==19?"视频":"语音")+"通话";msgStr2=ClientName+"拒绝"+(onlineVideo==19?"视频":"语音")+"通话";}
else if(f==5)
msgStr1=msgStr2="开始"+(onlineVideo==1?"视频":"语音")+"通话";showMsg(msgStr1,'s');var g=new JSONArg("system");g.content=msgStr2;g.address=file;g.OtherItem=s;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function openremote(){get_element_id("remote_cancel_invite").style.display="block";get_element_id("remote_cancel_invite").value=GetShowText("remote_cancel");get_element_id("divremotetip").style.display="block";get_element_id("remotetip").innerHTML=GetShowText("remote_tip1");Createremote();setTimeout(function(){if(remoteaddress!=""&&remotesessionname!="")
sendRemoteRequest(remoteaddress,remotesessionname,"",1);},550);showRemoteMsg(0);}
function setRemoteInfo(){remoteaddress="";remotesessionname="";remotetype=7;if(!remotelogin){remote_ConnectClient();setTimeout(function(){remote_login();remote_newsession(7);},150);}
else{remote_newsession(7);}
setTimeout(function(){if(remoteaddress!=""&&remotesessionname!="")
sendRemoteRequest(remoteaddress,remotesessionname,"",4);},450);}
function cancelremote(bu){get_element_id("divremotetip").style.display="none";get_element_id("remote_accept").style.display="none";get_element_id("remote_reject").style.display="none";get_element_id("remote_cancel_invite").style.display="none";isrcalled=0;if(remotelogin){remote_destroy();remote_logout();if(typeof(bu)=="undefined"){if(remoteaddress!=""&&remotesessionname!=""){showRemoteMsg(4);sendRemoteClose(3);}
else{showRemoteMsg(3);sendRemoteClose(2);}}
else{if(bu==3)
showRemoteMsg(6);else
showRemoteMsg(5);}
return;}
else{if(typeof(bu)=="undefined"){showRemoteMsg(3);sendRemoteClose(2);}
else{if(bu==1)
showRemoteMsg(6);else
showRemoteMsg(5);}}
return;}
function beremoted(){isrcalled=1;get_element_id("remotetip").innerHTML=GetShowText("remote_tip2");get_element_id("remote_accept").style.display="inline-block";get_element_id("remote_accept").value=GetShowText("remote_accept");get_element_id("remote_reject").style.display="inline-block";get_element_id("remote_reject").value=GetShowText("remote_reject");get_element_id("divremotetip").style.display="block";if(remotelogin){Inremote();showRemoteMsg(2);}
else{showRemoteMsg(1);}}
function Createremote(){remoteaddress="";remotesessionname="";remotetype=0;if(!remotelogin){remote_ConnectClient();window.setTimeout(function(){remote_login();},100);setTimeout(function(){remote_newsession(remotetype);},750);}
else{remote_newsession(remotetype);}}
function Inremote(issucess){get_element_id("remotetip").innerHTML=GetShowText("remote_tip3");get_element_id("remote_accept").style.display="none";get_element_id("remote_reject").style.display="none";get_element_id("remote_cancel_invite").style.display="inline-block";get_element_id("remote_cancel_invite").value=GetShowText("remote_Hangup");if(typeof(issucess)!="undefined")
showRemoteMsg(2);}
function sendRemoteRequest(remoteaddresss,remotesessionnames,voicesessionnames,type){var g=new JSONArg("remoterequest");g.address=remoteaddresss;if(voicesessionname!="")
g.name=remotesessionnames+"<$>"+voicesessionnames;else
g.name=remotesessionnames;g.action=type;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function sendRemoteClose(type){var g=new JSONArg("remoteclose");g.action=type;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function acceptRemoteRequest(){Createremote();Inremote();showRemoteMsg(2);}
function showRemoteMsg(f){var msgStr1="",msgStr2="",s="";if(f==0){msgStr1="您发起远程控制请求";msgStr2=ClientName+"发起远程控制请求";}
else if(f==1)
msgStr1=msgStr2="客服"+lbNickName+"发起远程控制请求";else if(f==2)
msgStr1=msgStr2="开始远程协助控制";else if(f==3){msgStr1="您拒绝远程控制请求";msgStr2=ClientName+"拒绝远程控制请求";}
else if(f==4){msgStr1="您关闭远程控制";msgStr2=ClientName+"关闭远程控制";}
else if(f==5){msgStr1=msgStr2="客服"+lbNickName+"拒绝远程控制请求";}
else if(f==6){msgStr1=msgStr2="客服"+lbNickName+"关闭远程控制";}
else if(f==7){if(isrcalled==0)
msgStr1="您发起远程协助请求失败，请<a href=\"http://dep.365webcall.com/chat/upload/webremote.rar\" target=\"_blank\">下载</a>并运行远程控件";else
msgStr1="客服发起远程控制请求，请您安装插件！<a href=\"http://dep.365webcall.com/chat/upload/webremote.rar\" target=\"_blank\">下载</a>";msgStr2="经检测访客未安装插件，请提醒访客安装插件！";isrcalled=0;}
showMsg(msgStr1,'s');var g=new JSONArg("system");g.content=msgStr2;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function callRecord(appid,channel,file){var iframeVideoRecord=null;var videoRecord=get_element_id("videoRecord");if(videoRecord!=null){iframeVideoRecord=$365_t(videoRecord,"IFRAME","iframeVideoRecord");}
var param="appId:"+appid+"-uid:0"+"-channel:"+channel+"-file:"+file;var url="http://sp1.365webcall.com/index.php?param="+encodeURIComponent(param);if(iframeVideoRecord!=null)
iframeVideoRecord.src=url;}
function ShowFaqWin(){var url="onlineHelp.aspx?settings="+getQueryString("settings")+"&LL="+ChatLanguage;wo=window.open(url,"onlineHelp","width=800,height=600,toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no,center=yes,left="+(window.screen.width-800)/2+",top="+(window.screen.height-600)/2);wo.focus();}
function hideFb(){get_element_id("aEvaluation").style.display="none";}
function eakayFeedback(){if(typeof(eakay)=="undefined")
return true;var t=new Date();var t0=t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();var t1=GetCookie("_eakay_Feedback_data");if(t1==t0)
return false;SetCookie("_eakay_Feedback_data",t0);return true;}
function messageWithdrawn(ident){var tag=get_element_id(ident);if(tag==null)
return;var messages=tag.parentNode;var msgcontent=messages.parentNode,msgtimenode=messages.previousSibling;msgcontent.removeChild(messages);if(msgtimenode.className.indexOf("timenode")>=0)
msgcontent.removeChild(msgtimenode);}
function clearinput(){get_element_id("txtInput").value="";}
function RobotSeletGsSpecial(hashCode){get_element_id("divimgMovies").style.display="";get_element_id("txtInput").disabled=false;var g=new JSONArg("seletgsspecial");g.content=hashCode;sendDataCallServer(EncodeString(JSON.stringify(g)));}
function goBackToBot(){bot=1;sysClosed=0;UpdateLang();turnToArtificial=0;closeSelectService();}
function showAllJxs(){var g=new JSONArg("MzdAllJxs");sendDataCallServer(EncodeString(JSON.stringify(g)));}
function csonChat(){var sltGroup=get_element_id("csonSelect").value;if(sltGroup.length==0){alert("请选择问题类型");return;}
var cn=trim(get_element_id("csonNickName").value);if(cn.length<2){alert("请输入用户名");return;}
openChatWin(sltGroup,0);}
function isIE(){var userAgent=navigator.userAgent;var tIE=userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1;return tIE;}
function SendFile(evt){if(CheckQueue())
return;if(hold){showMsg(GetShowText("holdBackHintText"),'s');return;}
Htm5File.url=ImgAddress+"uploadFile.aspx?SessionID="+_365groups_SessionID;var fileImage=get_element_id("fileImage");if(fileImage){if(Htm5File.fileInput==null){Htm5File.fileInput=fileImage;Htm5File.init();}
fileImage.click();}}
Htm5File.filter=function(files){var arrFiles=[];for(var i=0,file;file=files[i];i++){var t="";if(file.type.length>11)
t=file.type.substr(12);if(file.type.indexOf("image")==0||t=="zip"||t=="msword"||t=="vnd.ms-excel"||t=="vnd.ms-powerpoint"||t=="pdf"||file.name.indexOf(".rar")>2||file.name.indexOf(".7zip")>2){if(file.type.indexOf("image")==0)
Htm5File.filetype="image";else
Htm5File.filetype="file";if(file.size>=8192000){alert(GetShowText("SendFileError2"));}else{if(arrFiles.length<1)
arrFiles.push(file);}}else{alert(GetShowText("FileNameError2"));}}
return arrFiles;};Htm5File.onSelect=function(files){var self=this;var msg='',i=0;var funAppendImage=function(){file=files[i];if(file){var reader=new FileReader();reader.onload=function(e){if(Htm5File.filetype=="image")
msg='<img id="uploadImage_'+file.index+'" src="'+e.target.result+'" class="upload_image_fail" />'+'<div class="upload_progress"><div class="upload_preloader"></div><div id="uploadProgress_'+file.index+'" class="upload_percent"></div></div>';else
msg='<div style=\"border:0;\"><img id="uploadfile_'+file.index+'" src="images/newChat3/floatwin/file1.png" style="background:none;float:left;" />'+'<div id="file-info'+file.index+'" class="file-info"><div style=\"color:#000;border:0;\">'+file.name+'</div><div class="progressBar"><div class="progressbarwidth" style="width: 0"></div></div><div class="c-gray">0%</div></div></div>';i++;funAppendImage();}
reader.readAsDataURL(file);}
else{if(trim(msg).length>0){showMsg(msg,'v');self.funUploadFile();}}};funAppendImage();}
Htm5File.onProgress=function(file,loaded,total){if(Htm5File.filetype=="image"){var eleProgress=get_element_id("uploadProgress_"+file.index),percent=(loaded/total*100).toFixed(2)+'%',picheight=get_element_id("uploadImage_"+file.index).offsetHeight;if(eleProgress){eleProgress.previousElementSibling.style.marginTop="-"+((picheight+40)/2).toString()+"px";eleProgress.parentNode.style.display="block";eleProgress.innerHTML=percent;}}
else{var fileinfo=get_element_id("file-info"+file.index),progressbarwidth=fileinfo.getElementsByClassName("progressbarwidth")[0];var graypercent=fileinfo.getElementsByClassName("c-gray")[0],percent=(loaded/total*100).toFixed(2)+'%';progressbarwidth.style.width=percent;graypercent.innerHTML=percent;}};Htm5File.onSuccess=function(file,response){var eleProgress=get_element_id("uploadProgress_"+file.index);var uploadImage=get_element_id("uploadImage_"+file.index);if(Htm5File.filetype=="image"&&eleProgress){uploadImage.className="";eleProgress.parentNode.parentNode.removeChild(eleProgress.parentNode);}
else{var fileinfo=get_element_id("file-info"+file.index);var graypercent=fileinfo.getElementsByClassName("c-gray")[0];graypercent.style.display="none";fileinfo.getElementsByClassName("progressBar")[0].style.display="none";}};Htm5File.onFailure=function(file){if(Htm5File.filetype=="image"){var uploadImage=get_element_id("uploadImage_"+file.index);uploadImage.className="upload_image_fail";var eleProgress=get_element_id("uploadProgress_"+file.index);eleProgress.previousElementSibling.style.backgroundImage="none";setTimeout(function(){eleProgress.innerHTML=GetShowText("SendFileError1");},50)}
else{var fileinfo=get_element_id("file-info"+file.index);var graypercent=fileinfo.getElementsByClassName("c-gray")[0];var uploadfile=get_element_id("uploadfile_"+file.index);fileinfo.getElementsByClassName("progressBar")[0].style.display="none";uploadfile.src="images/newChat3/floatwin/file2.png";graypercent.innerHTML=GetShowText("SendFileError1");}};Htm5File.onComplete=function(){get_element_id("fileImage").value="";};function showMainView(){get_element_id("ourView").style.display="";}
function sendParentMsg(c,msg){if(isIE())
return;if(!isWin4())
return;if(typeof(msg)=="undefined")
msg="";
console.log("send_c:" + c);
var data={_365_cmd:c,_365_msg:msg};parent.postMessage(data,'*');}
sendParentMsg("h5ok");function receiveParentMsg(ev){var data=ev.data;console.info('message from parent:',data);if(typeof(data._365_cmd)!="undefined"){console.log("_365_cmd:"+data._365_cmd);if(data._365_cmd=="CloseConfirm")
closeConfirm();}}