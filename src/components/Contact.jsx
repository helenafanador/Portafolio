import React from 'react'

const Contact = () => {
    return (
        <footer className='footer'>
            <form class="form">
                <h3>Contactame</h3>
                <div class="flex">
                    <label>
                        <input required="" placeholder="" type="text" class="input" />
                        <span>first name</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" class="input" />
                        <span>last name</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="email" class="input" />
                    <span>email</span>
                </label>

                <label>
                    <input required="" type="tel" placeholder="" class="input" />
                    <span>contact number</span>
                </label>
                <label>
                    <textarea required="" rows="3" placeholder="" class="input01"></textarea>
                    <span>message</span>
                </label>

                <button class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">submit</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>
            </form>
        </footer>
    )
}

export default Contact