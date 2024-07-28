import React from 'react'
import { deleteNote } from '../api';




const NoteCopy = (props) => {
    const currentColor= props.color;
    const handleDeleteNote = async()=>{
        try {
            const id = props.Noteid;
            console.log(id);
            deleteNote(id);
            console.log("Note Deleted");
            window.location.reload();   
        } catch (error) {
            console.log(error,"Error in deleting note");
        }

    };
    const handleEdit = async()=>{
        try {
            const id = props.Noteid;
            const current_title = props.title;
            const current_content = props.content;
            props.handleNoteEdit(id,current_title,current_content);

        } catch (error) {
            console.log(error,"Error in Editing note");
        }
    }

  return (
    <>
        <div
                className={`group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
                <div
                    className={`absolute top-3 p-1.5 right-2 z-30 mx-auto w-[30px] h-[30px] bg-white/80 py-3 shadow backdrop-blur-lg md:bottom-6 md:rounded-full flex items-center justify-center cursor-pointer text-2xl text-red-500 hover:bg-${currentColor}-100 hover:text-white`}
                    onClick={handleDeleteNote}
                >
                    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M58.9 78.6l-41.3 41.9c-1.5 1.5-3.2 2.5-5 3c4.1 1.2 8.6.2 11.8-3l38.2-38.1c.8-.8 2.1-.8 2.8 0l-3.7-3.8c-.7-.8-2-.8-2.8 0z" fill="#c33"> </path> <path d="M82.3 65.4c-.8-.8-.8-2 0-2.8l38.2-38.1c4.7-4.7 4.7-12.3 0-17s-12.2-4.7-16.9 0L65.4 45.6c-.8.8-2 .8-2.8 0L24.5 7.5c-4.7-4.7-12.3-4.7-17 0c-.4.4-.7.8-1 1.2c.2-.3.4-.5.6-.7c4.7-4.6 10.1-2.5 14.8 2.2l37.6 38.5c.8.8 2 .8 2.8 0l39.3-39.2c4.7-4.7 9.4-5.1 14.1-.4s3.9 9.6-.8 14.3L75.6 62.6c-.8.8-.8 2 0 2.8c0 0 38.1 38.2 38 38.2c4.7 4.7 6.5 10 1.8 14.7s-10.6 3.5-15.3-1.1l3.4 3.4c4.7 4.7 12.3 4.7 17 0s4.7-12.2 0-16.9c0-.1-38.2-38.3-38.2-38.3z" fill="#c33"> </path> <path d="M115.4 118.3c4.7-4.7 2.9-10-1.8-14.7c.1 0-38-38.2-38-38.2c-.8-.8-.8-2 0-2.8l39.3-39.2c4.7-4.7 5.5-9.6.8-14.3s-9.4-4.3-14.1.4L62.3 48.7c-.8.8-2 .8-2.8 0L21.9 10.2C17.2 5.5 11.8 3.4 7.1 8c-.2.2-.4.4-.6.7c-3.7 4.7-3.3 11.4 1 15.7l38.1 38.2c.8.8.8 2.1 0 2.8L7.5 103.5c-4.7 4.7-4.7 12.3 0 17c1.5 1.5 3.2 2.5 5 3c1.8-.6 3.6-1.6 5-3l41.3-41.9c.8-.8 2.1-.8 2.8 0l3.7 3.8l34.7 34.8c4.8 4.6 10.7 5.8 15.4 1.1z" fill="#f44336"> </path> <g fill="#ffffff"> <path d="M55 56.4c-1.1-1.6-32.3-33.1-32.3-33.1s-2.3-2.6-4.7-.8c-2.2 1.7-1.1 4.3.1 5.6s29 29.7 30.4 30.9c1.3 1.2 3.9 1.4 5.5.6s1.8-2.1 1-3.2z" opacity=".2"> </path> <circle cx="12.2" cy="19" r="3.3" opacity=".2"> </circle> </g> <path d="M72.1 81.8c1.1 1.6 32.8 32.6 32.8 32.6s2.3 2.6 4.7.7c2.2-1.7 1-4.3-.2-5.6c-1.2-1.3-29.4-29.3-30.8-30.5c-1.3-1.2-3.9-1.3-5.5-.5s-1.8 2.2-1 3.3z" opacity=".2" fill="#ffffff"> </path> </g></svg>
                </div>
                <div
                    className={`absolute bottom-1 right-2 z-30 mx-auto p-1 w-[30px] h-[30px] border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:bottom-6 md:rounded-full flex items-center justify-center cursor-pointer text-2xl text-red-500 hover:bg-${currentColor}-100 hover:text-white`}
                    onClick={handleEdit}
                >
                <svg width="152px" height="152px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-${currentColor}-500 transition-all duration-300 group-hover:scale-[100]`}></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className={`grid h-20 w-20 place-items-center rounded-full bg-${currentColor}-500 transition-all duration-300 group-hover:bg-${currentColor}-400`}>
                    <svg fill="#FFFFFF" className='h-10 w-10 text-white' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"></path> </g></svg>
                    </span>
                    <div className="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" className={`text-${props.color}-500 text-3xl transition-all duration-300 group-hover:text-white`}>{props.title}
                            </a>
                        </p>
                    </div>
                    <div
                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>{props.content}</p>
                    </div>
                    
                </div>
            </div>
    </>
  )
}

export default NoteCopy
