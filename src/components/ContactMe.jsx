import React from 'react';

function ContactMe() {
  return (
    <>
      <div className='contact-con'>
        <div className='contact-con-form ?'>
        <h4> Contact to me</h4>
        <form>
          <label for='name'>Name</label>
          <input type='text' id='name' placeholder='Name'></input>
          <label for='name'>Name</label>
          <input type='text' id='name' placeholder='Name'></input>
          <button type='submit'>SEND</button>
        </form>
        </div>
        <div className='contact-con-social ?'>
          <h4> Follow me on SNS</h4>
          <ul>
            <li><a href='#' alt='LinkdIn'>LinkdIn</a></li>
            <li><a href='#' alt='GitHub'>GitHub</a></li>
            <li><a href='#' alt='Homepage'>Homepage</a></li>
          </ul>
        </div>
      </div>
    </>
    );
}

export default ContactMe;
