function I18N() {
    var lang = 'en';
    var $tts = {
        APP_NAME: {
            zh: "系统控制",
            en: "OS Control"
        },
        APP_UPGRADE: {
            zh: "应用更新",
            en: "App Upgrade"
        },
        UPGRADE_PLAN: {
            zh: "升级计划",
            en: "Upgrade Plan"
        },
        APP_VERSION: {
            zh: "应用版本",
            en: "App Version"
        },
        APP_MANAGE: {
            zh: "应用管理",
            en: "App Manage"
        },
        APP_ANALYSIS: {
            zh: "应用分析",
            en: "App Analysis"
        },
        PLAN_NAME: {
            zh: "计划名称",
            en: "Plan Name"
        },
        PLAN_STATE: {
            zh: "计划状态",
            en: "Plan State"
        },
        COUNTRY: {
            zh: "国家",
            en: "Country"
        },
        MODEL: {
            zh: "机型",
            en: "model"
        },
        SEARCH: {
            zh: "查询",
            en: "Search"
        },
        NEW: {
            zh: "新建",
            en: "Add"
        }
    };
    function $toggle($root){
        function forceUpdate(obj) {
            obj.$forceUpdate()
            obj.$children.forEach(function(item) {
                forceUpdate(item)
            })
        }
        lang = (lang == 'en')?'zh':'en'
        forceUpdate($root)
    }
    function $translate(label){
        return $tts[label][lang]
    }
    return {
        $toggle: $toggle,
        $translate: $translate
    }
}

function mixin(Vue) {
    Vue.prototype.I18N = I18N()
}

module.exports = mixin