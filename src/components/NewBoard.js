const NewBoard = () =>{
return (
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
</section>
)
};

export default NewBoard;