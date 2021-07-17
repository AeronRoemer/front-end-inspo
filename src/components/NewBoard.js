import { useState } from "react";

const NewBoard = (props) =>{
    const [ hidden, setHidden ] = useState(false);
    const submitBoard = props.submitBoard;
    let owner = '';
    let title = '';

    const hideForm = () => {
        setHidden(true);
    }
    const showForm = () => {
        setHidden(false);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        submitBoard(title, owner)

    }

    const updateOwner = (e) => {
        owner = e.target.value
      };
    const updateTitle = (e) => {
        title = e.target.value
      };


    if ( hidden == false ){
        return(
            <section>
                <div className='new-card-form-container'>
                    <h4>Create a New Board</h4>
                    <form onSubmit={(e)=>submitHandler(e)}>
                        <input 
                        className="board-input"
                        type='text' 
                        name='name'
                        placeholder="Your Name"
                        onChange={updateOwner}
                        />
                        <br />
                        <input 
                        className="board-input"
                        type='text' 
                        name='name'
                        placeholder="Board Name"
                        onChange={updateTitle}
                        />

                        <button
                        className='submit-button'
                        type='submit'
                        > Submit 
                        </button>
                    </form>
                </div>
                <button className='hide-button' onClick={() => hideForm()}> Hide</button>
            </section>
        )
    } else {
        return(
            <button className='hide-button' onClick={() => showForm()}>Create a New Board</button>
        )
    }

};

export default NewBoard;