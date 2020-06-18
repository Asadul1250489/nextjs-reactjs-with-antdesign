import { Button } from 'antd';

import { useState } from 'react';
import stylesheet from 'antd/dist/antd.min.css';
export default () =>{
        const [todos,setTodos] = useState(['todo 1','todo 2']);
        const [todo,setTodo] = useState('');
        const removeTodo = todo => {
             setTodos(todos.filter( t => t != todo))
        }
        return(
            <div>
                 <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style jsx>{`
        #components-layout-demo-top-side-2 .logo {
          width: 120px;
          height: 31px;
          background: #333;
          border-radius: 6px;
          margin: 16px 28px 16px 0;
          float: left;
        }
      `}</style>
                <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <Button type="primary" onClick={() => setTodos([...todos, todo])}>Add</Button>
                {

                    todos.map(todo => (
                        <div>
                    <h1>{todo}</h1>
                    <Button onClick={()=>removeTodo(todo) }>remove</Button>
                    </div>
                    ))
                }
            </div>
        );
}