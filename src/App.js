import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFoundPage from "./Routes/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="student" element={<Student />}>
                <Route path=":studentId" element={<EditStudent />} />
            </Route>
            <Route path="add" element={<AddStudent />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default App;
