import { defineComponent } from "vue";
import s from './First.module.scss';
import cloud from '../../assets/icons/cloudData.svg'
import { RouterLink } from "vue-router";
export const Fourth = defineComponent({
    setup: (props, context)=> {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.icon} src={cloud} />
                    <h2>会挣钱<br />还要会省钱</h2>
                </div>
                <div class={s.action}>
                    <RouterLink class= {s.fake} to="/start"> 跳过 </RouterLink>
                    <RouterLink to="/start"> 完成</RouterLink>
                    <RouterLink class= {s.fake} to="/start"> 跳过 </RouterLink>

                </div>
            </div>
        )
    }
})
