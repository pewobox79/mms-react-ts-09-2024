import React, { useState } from 'react'

function NewPostForm() {

    const INIT_DATA = { body: "", title: "" }
    const INIT_SUCCESS_DATA ={ state: false, data: { title: "", body: "" } }
    
    const [newPost, setNewPost] = useState(INIT_DATA)
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(INIT_SUCCESS_DATA)

    function handleChange(e: { target: { name: string, value: string } }) {
        setNewPost({ ...newPost, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setSuccess({...success, state: true, data:json })
                setNewPost(INIT_DATA)
                setOpen(false)
            });
    }

    function handleOpen(){
        setOpen(!open)
        setSuccess(INIT_SUCCESS_DATA)
    }

    return (
        <div>
            <button onClick={handleOpen }>{open ? "Close" : "Add new Post"}</button>
           
            {open &&
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={newPost.title} placeholder="Post Title" onChange={handleChange} /><br />
                    <textarea name="body" value={newPost.body} cols={16} onChange={handleChange} placeholder="Erzähle uns mehr" /><br/>
                    <button type="submit">Send Artikel</button>
                </form>}

{success.state && <div><p>Dein Artikel ist erfolgreich angekommen.</p>
<p>Title: {success.data.title}</p>
<p>Body: {success.data.body}</p></div>}

        </div>
    )
}

export default NewPostForm