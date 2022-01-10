import react from 'react';



export default function ToDoItem(props) {
  return (
    <li className="list-group-item" key={props.index}>
      <div class='form-check'>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" 
        onChange={(event)=>props.markeCompleted(props.index,event)} />
        <label class="form-check-label" for="exampleCheck1">{props.title}</label>
        <button type="button" onClick={(event)=>props.deleteItem(props.index,event)} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

    </li>
  );
}

