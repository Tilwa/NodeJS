const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

//create a new student
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//read the data of registered students
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(201).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get the individual student data
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.find(_id);
    if (!studentData) {
      res.status(404).send(studentData);
    } else {
      res.status(201).send(studentData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//update the students by id
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updateStudents);
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete the students by id
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudents = await Student.findByIdAndDelete(_id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.status(201).send(deleteStudents);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
