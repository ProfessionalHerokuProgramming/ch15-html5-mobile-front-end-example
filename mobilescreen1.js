/*
 * JS for mobilescreen1 generated by Exadel Tiggzi
 *
 * Created on: Monday, September 24, 2012, 08:38:01 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle";

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
var EmployeeListService = new Tiggr.RestService({
    'url': 'http://html5-mobile-backend-example.herokuapp.com/',
    'dataType': 'json',
    'type': 'get',
});
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggr.AppPages = [{
    "name": "mobilescreen1",
    "location": "mobilescreen1.html"
}];
j_0_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'outputGrid': 'j_4',
        'mobilegridcell1': 'j_5',
        'employeeID': 'j_6',
        'mobilegridcell2': 'j_7',
        'employeeName': 'j_8',
        'mobilegridcell3': 'j_9',
        'mobilegridcell4': 'j_10',
        'employeeEmail': 'j_11'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'j_0';
    /*************************
     * NONVISUAL COMPONENTS  *
     *************************/
    var datasources = [];
    restservice4 = new Tiggr.DataSource(EmployeeListService, {
        'onComplete': function(jqXHR, textStatus) {
            $t.refreshScreenFormElements("j_0");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'outMappings': [{
            'PATH': ['rows'],
            'ID': 'outputGrid',
            'SET': [{
                'PATH': ['id'],
                'ID': 'employeeID',
                'ATTR': '@'
            }, {
                'PATH': ['name'],
                'ID': 'employeeName',
                'ATTR': '@'
            }, {
                'PATH': ['email'],
                'ID': 'employeeEmail',
                'ATTR': '@'
            }, {
                'PATH': ['email'],
                'ID': 'employeeEmail',
                'ATTR': 'href',
                'TRANSFORMATION': function(value, element) {
                    return 'mailto:' + value;
                }
            }]
        }],
        'inMappings': []
    });
    datasources.push(restservice4);
    /************************
     * EVENTS AND HANDLERS  *
     ************************/
    j_0_beforeshow = function() {
        Tiggr.CurrentScreen = 'j_0';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_5166_onLoad = j_0_onLoad = function() {
        screen_5166_elementsExtraJS();
        try {
            restservice4.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };
        j_0_windowEvents();
        screen_5166_elementsEvents();
    }
    // screen window events
    screen_5166_windowEvents = j_0_windowEvents = function() {
        $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_5166_elementsExtraJS = j_0_elementsExtraJS = function() {
        // screen (screen-5166) extra code
    }
    // screen elements handler
    screen_5166_elementsEvents = j_0_elementsEvents = function() {
        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
    }
    $("#j_0").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_0_beforeshow();
    });
    if (runBeforeShow) {
        j_0_beforeshow();
    } else {
        j_0_onLoad();
    }
}
$("#j_0").die("pageinit").live("pageinit", function(event, ui) {
    j_0_js();
});