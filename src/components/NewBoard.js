import { useState } from "react";

const NewBoard = () =>{
    const [ hidden, setHidden ] = useState(false);

    const hideForm = () => {
        setHidden(true);
    }
    const showForm = () => {
        setHidden(false);
    }

    if ( hidden == false ){
        return(
            <section>
                <div className='new-card-form-container'>
                    <h4>Create a New Board</h4>
                    <form>
                        <input 
                        className="board-input"
                        type='text' 
                        name='name'
                        placeholder="Your Name"
                        />
                        <br />
                        <input 
                        className="board-input"
                        type='text' 
                        name='name'
                        placeholder="Board Name"
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