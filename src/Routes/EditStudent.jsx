import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";

import CustomInput from "../components/CustomInput";

const EditStudent = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  const { studentId } = useParams();
  const navigate = useNavigate();
  const [reload, setReload] = useOutletContext();

  useEffect(() => {
    const loadStudent = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/student/${studentId}`
        );
        const data = await response.json();
        setStudent(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadStudent();
  }, [studentId]);

  const handleEdit = async (e) => {
    e.preventDefault();

    const searchFacultyByPrody = (prody) => {
      switch (prody) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          return "Fakultas Ekonomi";
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          return "Fakultas Ilmu Sosial dan Politik";
        case "Teknik Sipil":
        case "Arsitektur":
          return "Fakultas Teknik";
        case "Matematika":
        case "Fisika":
        case "Informatika":
          return "Fakultas Teknologi Informasi dan Sains";

        default:
          return "Not a registered prody!";
      }
    };

    const programStudy =
      e.target.elements[5].value === ""
        ? student.programStudy
        : e.target.elements[5].value;

    try {
      await fetch(`http://localhost:3001/student/${studentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: e.target.elements[0].value,
          profilePicture: student.profilePicture,
          address: e.target.elements[1].value,
          birthDate: e.target.elements[3].value,
          gender:
            e.target.elements[4].value === ""
              ? student.gender
              : e.target.elements[4].value,
          phoneNumber: e.target.elements[2].value,
          faculty: searchFacultyByPrody(programStudy),
          programStudy: programStudy,
        }),
      });
      setReload(!reload);
      navigate("/student", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {loading ? (
        <p className="text-center italic">Loading ...</p>
      ) : (
        <>
          <h1 className="font-bold text-3xl mb-10">Edit Student Profile</h1>
          <div className="flex justify-between gap-10">
            <img
              src={student.profilePicture}
              alt={`${student.fullname} Profile`}
              className="w-56 rounded-full self-start mb-5"
            />
            <form
              className="w-3/4 grid grid-rows-4 grid-cols-2 gap-2"
              onSubmit={handleEdit}
            >
              <CustomInput
                dataTestId="name"
                wrapperId="form-name"
                wrapperClass="col-span-2"
                inputId="input-name"
                label="Fullname"
                inputType="text"
                defaultValue={student.fullname}
                isRequired={true}
              />

              <CustomInput
                dataTestId="address"
                wrapperId="form-address"
                wrapperClass="col-span-2"
                inputId="input-address"
                label="Address"
                inputType="text"
                defaultValue={student.address}
                isRequired={true}
              />

              <CustomInput
                dataTestId="phoneNumber"
                wrapperId="form-phone-number"
                wrapperClass="col-span-2"
                inputId="input-phone-number"
                label="Phone Number"
                inputType="text"
                defaultValue={student.phoneNumber}
                isRequired={true}
              />

              <CustomInput
                dataTestId="date"
                wrapperId="form-date"
                inputId="input-date"
                label="Birth Date"
                inputType="date"
                defaultValue={student.birthDate}
                isRequired={true}
              />

              <CustomInput
                dataTestId="gender"
                wrapperId="form-gender"
                wrapperClass=""
                inputId="input-gender"
                label="Gender"
                inputType="select"
                options={["Male", "Female"]}
                defaultValue={student.gender}
                isRequired={true}
              />

              <CustomInput
                dataTestId="prody"
                wrapperId="form-prody"
                wrapperClass="col-span-2"
                inputId="input-prody"
                label="Program Study"
                inputType="select"
                options={[
                  "Ekonomi",
                  "Manajemen",
                  "Akuntansi",
                  "Administrasi Publik",
                  "Administrasi Bisnis",
                  "Hubungan Internasional",
                  "Teknik Sipil",
                  "Arsitektur",
                  "Matematika",
                  "Fisika",
                  "Informatika",
                ]}
                defaultValue={student.programStudy}
                isRequired={true}
              />

              <Stack
                spacing={4}
                direction="row"
                align="center"
                justifyContent={"end"}
                gridColumnStart={"2"}
                my={"10"}
              >
                <Button
                  as={Link}
                  to="/student"
                  height={"50px"}
                  border={"2px solid brand.blue.200"}
                >
                  Cancel
                </Button>
                <Button data-testid="edit-btn" height={"50px"} type="submit">
                  Edit student
                </Button>
              </Stack>
            </form>
          </div>
        </>
      )}
    </main>
  );
};

export default EditStudent;
