import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {

    const [text, setText] = useState ('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState (true)
    const [message, setMessage] = useState ('')

    const handleTextChange = ({ target: { value } }) => { 
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
        } else if (value.trim().length < 10) { 
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }

      const handleSubmit = (e) => {
          e.preventDefault ()
          if(text.trim().length > 10) {
              const newFeedback = {
                  text: text,
                  rating
              }

              handleAdd(newFeedback)

              setText('')
          }
      }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Lorem ipsum dolor sit amet?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
                <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder='Write a review'
                    value={text}
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm