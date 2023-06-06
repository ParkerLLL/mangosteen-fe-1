import { defineComponent } from "vue";
import s from './First.module.scss';
import chart from '../../assets/icons/visualization.svg'
import { RouterLink } from "vue-router";
export const Third = defineComponent({
    setup: (props, context)=> {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img class={s.icon} src={chart} />
                    <h2>会挣钱<br />还要会省钱</h2>
                </div>
                <div class={s.action}>
                    <RouterLink class= {s.fake} to="/start"> 跳过 </RouterLink>
                    <RouterLink to="/welcome/4"> 下一页</RouterLink>
                    <RouterLink to="/start"> 跳过 </RouterLink>

                </div>
            </div>
        )
    }
})
