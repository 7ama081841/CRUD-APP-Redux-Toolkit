import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, deletePosts, updatePost } from "../redux/postsSlice";
import { useSelector } from "react-redux";

export default function Postes() {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDesc, setUpdateDesc] = useState("");


    const [isUpdate, setIsUpdate] = useState(false);
    const [id, setId] = useState(null);

    const dispatch = useDispatch();

    const state = useSelector((state) => state.posts.items);

    return (
        <div className="container">
            <div className="form">
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Post Titel"
                />
                <input
                    type="text"
                    onChange={(e) => setdesc(e.target.value)}
                    placeholder="Enter Post Description"
                />
                <button
                    onClick={() => {
                        dispatch(
                            addPost({ id: state.length + 1, title, desc })
                        );
                        const input = document.querySelectorAll("input");
                        input.forEach((el) => (el.value = ""));
                    }}
                >
                    Add Post
                </button>
            </div>

            <div className="posts">
                {state.length > 0 &&
                    state.map((post, key) => (
                        <div className="post" key={key}>
                            <h2> {post.title} </h2>
                            <p> {post.desc} </p>
                            <button
                                onClick={() => {
                                    setIsUpdate(true);
                                    setId(post.id);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deletePosts(post.id))}
                            >
                                Delete
                            </button>
                            <br />
                            {isUpdate && id === post.id && (
                                <>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setUpdateTitle(e.target.value)
                                        }
                                        placeholder="Udate Title"
                                    />
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setUpdateDesc(e.target.value)
                                        }
                                        placeholder="Udate Descreption"
                                    />
                                    <button
                                        onClick={(id) => {
                                            setIsUpdate(false);
                                            dispatch(
                                                updatePost({
                                                    id: post.id,
                                                    title: updateTitle,
                                                    desc: updateDesc,
                                                })
                                            );
                                        }}
                                    >
                                        Udate
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}
