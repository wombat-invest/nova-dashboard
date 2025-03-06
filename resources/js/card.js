import Card from './components/Card.vue'
import { registerMixin, registerDashboardMixin } from './components/Mixin'
import DashboardView from '@/views/Dashboard'

Nova.booting(app => {

    const componentFn = app.component

    registerDashboardMixin(
        DashboardView,
    )

    app.component = function (name, component) {

        if (name.endsWith('widget')) {
            registerMixin(component)
        }

        return componentFn.call(this, name, component)

    }

    app.component('nova-dashboard', Card)

})
