import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './components/Slidebar';
import Editor from './components/Editor';
import { data } from './data';
import Split from "react-split"
// npm install --save react-split
import {nanoid} from "nanoid"
export default function App() {
  const [notes, setNotes] = React.useState(
                                ()=> JSON.parse(localStorage.getItem("notes")) || [])
                                //lazilly initialize out notes state so it doesn t reach in to localstorage on every single re-render of the App
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )
  
  React.useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "# Type your markdown note's title here"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
      // setNotes(oldNotes => oldNotes.map(oldNote => {
      //     return oldNote.id === currentNoteId
      //         ? { ...oldNote, body: text }
      //         : oldNote
      // }))
      setNotes(oldNotes=>{
        const newArray =[]
        for(let i =0; i<oldNotes.length;i++){
          const oldNote = oldNotes[i]
          if(oldNote.id=== currentNoteId){
            newArray.unshift({...oldNote,body:text})
          }
          else{
            newArray.push(oldNote)
          }
        }
        return newArray
      })
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }
  function deleteNote(event, noteId) {
      event.stopPropagation()
      setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }
  return (
      <main>
      {
          notes.length > 0 
          ?
          <Split 
              sizes={[30, 70]} 
              direction="horizontal" 
              className="split"
          >
              <Sidebar
                  notes={notes}
                  currentNote={findCurrentNote()}
                  setCurrentNoteId={setCurrentNoteId}
                  newNote={createNewNote}
                  deleteNote={deleteNote}
              />
              {
                  currentNoteId && 
                  notes.length > 0 &&
                  <Editor 
                      currentNote={findCurrentNote()} 
                      updateNote={updateNote} 
                  />
              }
          </Split>
          :
          <div className="no-notes">
              <h1>You have no notes</h1>
              <button 
                  className="first-note" 
                  onClick={createNewNote}
              >
                  Create one now
              </button>
          </div>
          
      }
      </main>
  )
}