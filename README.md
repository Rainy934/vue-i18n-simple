# vue-i18n-simple
### Get start

##### Set the default language code and initlize the i18n information by ```I18n.$init(langstr, VueComponet)```

    this.I18N.$init({
        lang: 'en',
        tts: {
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
            }
        }
    })
    
the ```this```is the vue root instance, we need complete initlizing before dom render. 

##### ```I18n.$translate(labelStr)```

    <div class="au-left" :class="{'toggle-show': showMenu}">
        <div class="logo"><span class="logo-text">{{I18N.$translate('APP_NAME')}}</span></div>
        <au-menu></au-menu>
    </div>
    
##### Change the language code

    this.I18N.$set(this.lang, this.$root)
