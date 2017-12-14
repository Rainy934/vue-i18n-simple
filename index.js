function I18N() {
    var lang = 'en';
    var $tts = {}
    function $toggle(langStr, $root){
        function forceUpdate(obj) {
            obj.$forceUpdate()
            obj.$children.forEach(function(item) {
                forceUpdate(item)
            })
        }
        lang = langStr
        forceUpdate($root)
    }
    function $translate(label){
        return $tts[label][lang]
    }

    function $setLanguage(langObj) {
        $tts = langObj
    }
    return {
        $setLanguage: $setLanguage
        $toggle: $toggle,
        $translate: $translate
    }
}

function mixin(Vue) {
    Vue.prototype.I18N = I18N()
}

module.exports = mixin