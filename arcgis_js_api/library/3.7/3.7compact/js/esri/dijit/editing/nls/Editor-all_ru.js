/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/editing/nls/Editor-all_ru",{"dijit/form/nls/validate":{rangeMessage:"\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043d\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430.",invalidMessage:"\u0423\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",missingMessage:"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."},
"dijit/_editor/nls/commands":{removeFormat:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442",copy:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",paste:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c",selectAll:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",insertOrderedList:"\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",insertTable:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
print:"\u041f\u0435\u0447\u0430\u0442\u044c",underline:"\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435",foreColor:"\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430",htmlToggle:"\u041a\u043e\u0434 HTML",formatBlock:"\u0421\u0442\u0438\u043b\u044c \u0430\u0431\u0437\u0430\u0446\u0430",newPage:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",insertHorizontalRule:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043a\u0430",
"delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",appleKey:"\u2318${0}",insertUnorderedList:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441 \u043c\u0430\u0440\u043a\u0435\u0440\u0430\u043c\u0438",tableProp:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",insertImage:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",superscript:"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
subscript:"\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",createLink:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",undo:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",fullScreen:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",italic:"\u041a\u0443\u0440\u0441\u0438\u0432",fontName:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u0430",
justifyLeft:"\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",unlink:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",toggleTableBorder:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0430\u043c\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",viewSource:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 HTML",
ctrlKey:"ctrl+${0}",fontSize:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",systemShortcut:'\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "${0}" \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0443\u0442\u0435\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448 ${1}.',indent:"\u041e\u0442\u0441\u0442\u0443\u043f",
redo:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",strikethrough:"\u041f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435",justifyFull:"\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435",justifyCenter:"\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",hiliteColor:"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430",deleteTable:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
outdent:"\u0412\u0442\u044f\u0436\u043a\u0430",cut:"\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c",plainFormatBlock:"\u0421\u0442\u0438\u043b\u044c \u0430\u0431\u0437\u0430\u0446\u0430",toggleDir:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",bold:"\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439",tabIndent:"\u0422\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u044f",justifyRight:"\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e"},
"dijit/nls/loading":{loadingState:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",errorState:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"},"dojo/cldr/nls/islamic":{"days-standAlone-short":"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"quarters-standAlone-narrow":["1","2","3","4"],
"field-weekday":"\u0414\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438","dateFormatItem-GyMMMEd":"E, d MMM y G","dateFormatItem-MMMEd":"ccc, d MMM",eraNarrow:["AH"],"days-format-short":"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y '\u0433'. G","months-format-wide":"\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c \u0421\u0430\u0444\u0430\u0440 \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0420\u0430\u0434\u0436\u0430\u0431 \u0428\u0430\u0430\u0431\u0430\u043d \u0420\u0430\u043c\u0430\u0434\u0430\u043d \u0428\u0430\u0432\u0432\u0430\u043b\u044c \u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430 \u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(" "),
"dateFormatItem-yyyyQQQ":"QQQ y G","dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f","dateFormat-full":"EEEE, d MMMM y '\u0433'. G","dateFormatItem-yyyyMEd":"E, dd.MM.y G","dateFormatItem-Md":"dd.MM","dayPeriods-format-abbr-am":"\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","field-era":"\u042d\u0440\u0430","months-standAlone-wide":"\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c \u0421\u0430\u0444\u0430\u0440 \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0420\u0430\u0434\u0436\u0430\u0431 \u0428\u0430\u0430\u0431\u0430\u043d \u0420\u0430\u043c\u0430\u0434\u0430\u043d \u0428\u0430\u0432\u0432\u0430\u043b\u044c \u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430 \u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(" "),
"timeFormat-short":"H:mm","quarters-format-wide":["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],"timeFormat-long":"H:mm:ss z","field-year":"\u0413\u043e\u0434","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u0427\u0430\u0441","months-format-abbr":"\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c \u0421\u0430\u0444\u0430\u0440 \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0420\u0430\u0434\u0436\u0430\u0431 \u0428\u0430\u0430\u0431\u0430\u043d \u0420\u0430\u043c\u0430\u0434\u0430\u043d \u0428\u0430\u0432\u0432\u0430\u043b\u044c \u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430 \u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(" "),
"timeFormat-full":"H:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","field-day-relative+1":"\u0417\u0430\u0432\u0442\u0440\u0430","dateFormatItem-GyMMMd":"d MMM y G","field-day-relative+2":"\u041f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430","dateFormatItem-H":"H","months-standAlone-abbr":"\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c \u0421\u0430\u0444\u0430\u0440 \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c \u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440 \u0420\u0430\u0434\u0436\u0430\u0431 \u0428\u0430\u0430\u0431\u0430\u043d \u0420\u0430\u043c\u0430\u0434\u0430\u043d \u0428\u0430\u0432\u0432\u0430\u043b\u044c \u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430 \u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(" "),
"quarters-format-abbr":["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],"quarters-standAlone-wide":["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],"dateFormatItem-Gy":"y G","dateFormatItem-yyyyMMMEd":"E, d MMM y G","dateFormatItem-M":"L","days-standAlone-wide":"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
"dateFormatItem-yyyyMMM":"LLL y G","dateFormatItem-yyyyMMMd":"d MMM y G","timeFormat-medium":"H:mm:ss","dateFormatItem-Hm":"H:mm","quarters-standAlone-abbr":["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],eraAbbr:["AH"],"field-minute":"\u041c\u0438\u043d\u0443\u0442\u0430","field-dayperiod":"\u0414\u041f/\u041f\u041f","days-standAlone-abbr":"\u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),
"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"\u0412\u0447\u0435\u0440\u0430","dateFormatItem-h":"h a","dateTimeFormat-long":"{1}, {0}","dayPeriods-format-narrow-am":"\u0434\u043f","field-day-relative+-2":"\u041f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E, dd.MM","dateTimeFormat-full":"{1}, {0}","field-day":"\u0414\u0435\u043d\u044c","days-format-wide":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
"field-zone":"\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y G","months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"field-year-relative+-1":"\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433\u043e\u0434\u0443","field-month-relative+-1":"\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{1} {0}",
"dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f","days-format-abbr":"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),eraNames:["AH"],"days-format-narrow":"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"dateFormatItem-yyyyMd":"dd.MM.y G","days-standAlone-narrow":"\u0412\u041f\u0412\u0421\u0427\u041f\u0421".split(""),
"dateFormatItem-MMM":"LLL","field-month":"\u041c\u0435\u0441\u044f\u0446","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-short":"dd.MM.y G","field-second":"\u0421\u0435\u043a\u0443\u043d\u0434\u0430","field-month-relative+0":"\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435",
"field-month-relative+1":"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043c\u0435\u0441\u044f\u0446\u0435","dateFormatItem-Ed":"E, d","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"\u041d\u0435\u0434\u0435\u043b\u044f","dateFormat-medium":"dd.MM.y G","field-year-relative+0":"\u0412 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443","field-week-relative+-1":"\u041d\u0430 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435","dateFormatItem-yyyyM":"MM.y G",
"field-year-relative+1":"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443","dayPeriods-format-narrow-pm":"\u043f\u043f","dateFormatItem-yyyyQQQQ":"QQQQ y '\u0433'. G","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"LLL y G","dateFormatItem-yyyy":"y G","field-week-relative+0":"\u041d\u0430 \u044d\u0442\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435","field-week-relative+1":"\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0435"},
"dijit/form/nls/ComboBox":{previousMessage:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",nextMessage:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}});