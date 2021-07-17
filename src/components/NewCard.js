
const NewCard = (props) => {
    const addCard = props.newCardSubmit;
    let message = ''

    const submitHandler = (e) =>{
        e.preventDefault();
        addCard(message)

    }

    const updateMessage = (e) => {
        message = e.target.value
      };
      
    return (
        <section>
            <div className='new-card-form-container'>
                <h4>Create a New Card</h4>
                <form onSubmit={(e)=>submitHandler(e)}>
                    <input 
                    className="card-input"
                    type='text' 
                    name='text'
                    placeholder="add message here!"
                    onChange={updateMessage}
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

export default NewCard;