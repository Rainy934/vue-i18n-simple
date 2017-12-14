function I18N() {
    var lang = '';
    var $tts = {}

    function $init(options) {
        lang = options.lang
        $tts = options.tts
    }

    function $set(langStr, $root){
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

    return {
        $init: $init,
        $set: $set,
        $translate: $translate
    }
}

function mixin(Vue) {
    Vue.prototype.I18N = I18N()
}

module.exports = mixin