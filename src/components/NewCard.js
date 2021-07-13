
const NewCard = (props) => {
    

    return (
        <section>
            <div className='new-card-form-container'>
                <h4>Create a New Card</h4>
                <form>
                    <input 
                    className="card-input"
                    type='text' 
                    name='text'
                    placeholder="add message here!"
                    />

                    <input 
                    className='submit-button'
                    type='submit' />
                </form>
            </div>
        </section>
    )
};

export default NewCard;