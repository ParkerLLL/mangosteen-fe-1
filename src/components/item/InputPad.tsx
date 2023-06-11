import { defineComponent, PropType, ref} from 'vue'; 
import { Icon } from '../../shared/Icon';
import { time } from '../../shared/time';
import s from './InputPad.module.scss';
export const  InputPad= defineComponent({
  props: {
     name: {
       type: String as PropType<string>
     }
  },
  setup: (props,context) => {
    const refDate= ref<Date>()
    const now = new Date()
    const buttons =[
        {text:'1', onclick: ()=>{}},
        {text:'2', onclick: ()=>{}},
        {text:'3', onclick: ()=>{}},
        {text:'清空', onclick: ()=>{}},
        {text:'4', onclick: ()=>{}},
        {text:'5', onclick: ()=>{}},
        {text:'6', onclick: ()=>{}},
        {text:'+', onclick: ()=>{}},
        {text:'7', onclick: ()=>{}},
        {text:'8', onclick: ()=>{}},
        {text:'9', onclick: ()=>{}},
        {text:'-', onclick: ()=>{}},
        {text:'.', onclick: ()=>{}},
        {text:'0', onclick: ()=>{}},
        {text:'删', onclick: ()=>{}},
        {text:'提交', onclick: ()=>{}},
    ]
     return () => <> 
        <div class={s.dateAndAmount}> 
            <span class={s.date}>  
                <Icon name="date" class={s.icon}/>
                <span> 
                    <input type="date" value={time(now).format()} />
                </span>
            </span>
            <span class={s.amount}>199.12</span> 
        </div>
        <div class={s.buttons}>
            {buttons.map(button =>
                <button onClick={button.onclick}>
                    {button.text}
                </button>)}
        </div>
     </>

  }
})