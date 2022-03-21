import React from 'react'

export default function Signup() {
  return (
    <div>
      <h3>Sign up</h3>
      <label htmlFor="userName">User Name </label> 
        <input type="text" /><br />
        <label htmlFor="passWord">Password </label>
        <input type="text" /> <br />
        <label htmlFor="babyAge">Baby's age </label>
        <select name="babyAge" id="">
          <option value="lessThan1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="More than 2">More than 2</option>
        </select><br />
        <label htmlFor="location">Location </label>
        <select name="location" id="">
          <option value="Täby">Täby</option>
          <option value="Sollentuna">Sollentuna</option>
          <option value="Solna">Solna</option>
        </select>
        <br />
        <button>Sign up</button>
        <button>Cancle</button>
    </div>
  )
}
