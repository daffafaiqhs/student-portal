import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";

import CustomInput from "../components/CustomInput";
import MainWrapper from "../components/MainWrapper";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleAddStudent = async (e) => {
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

    if (
      e.target.elements[5].value !== "Select an option" &&
      e.target.elements[6].value !== "Select an option"
    ) {
      await fetch(`http://localhost:3001/student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: e.target.elements[0].value,
          profilePicture: e.target.elements[1].value,
          address: e.target.elements[2].value,
          birthDate: e.target.elements[4].value,
          gender: e.target.elements[5].value,
          phoneNumber: e.target.elements[3].value,
          faculty: searchFacultyByPrody(e.target.elements[6].value),
          programStudy: e.target.elements[6].value,
        }),
      });

      navigate("/student", { replace: true });
    }
  };

  return (
    <MainWrapper>
      <Box
        flex={"1"}
        // className="py-10 px-60 flex-1"
      >
        <Heading as="h1" mb={"40px"} className="font-bold text-3xl mb-10">
          Add New Student
        </Heading>
        <form
          className="w-full grid grid-rows-4 grid-cols-2 gap-2"
          onSubmit={handleAddStudent}
        >
          <CustomInput
            dataTestId="name"
            wrapperId="form-name"
            wrapperClass="col-span-2"
            inputId="input-name"
            label="Fullname"
            inputType="text"
            placeholder="Input full name here"
            isRequired={true}
          />

          <CustomInput
            dataTestId="profilePicture"
            wrapperId="form-profile"
            wrapperClass="col-span-2"
            inputId="input-profile"
            label="Profile Picture"
            inputType="text"
            placeholder="Input profile picture link"
            isRequired={true}
          />

          <CustomInput
            dataTestId="address"
            wrapperId="form-address"
            wrapperClass="col-span-2"
            inputId="input-address"
            label="Address"
            inputType="text"
            placeholder="Input address"
            isRequired={true}
          />

          <CustomInput
            dataTestId="phoneNumber"
            wrapperId="form-phone-number"
            wrapperClass="col-span-2"
            inputId="input-phone-number"
            label="Phone Number"
            inputType="text"
            placeholder="Input phone numbers"
            isRequired={true}
          />

          <CustomInput
            dataTestId="date"
            wrapperId="form-date"
            inputId="input-date"
            label="Birth Date"
            inputType="date"
            isRequired={true}
          />

          <CustomInput
            dataTestId="gender"
            wrapperId="form-gender"
            wrapperClass=""
            inputId="input-gender"
            label="Gender"
            inputType="select"
            options={["Select an option", "Male", "Female"]}
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
              "Select an option",
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
            isRequired={true}
          />
          <div className="my-10 col-start-2 text-end">
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justifyContent={"end"}
            >
              <Button
                as={Link}
                to="/student"
                height={"50px"}
                border={"2px solid brand.blue.200"}
              >
                Cancel
              </Button>
              <Button data-testid="add-btn" height={"50px"} type="submit">
                Add student
              </Button>
            </Stack>
          </div>
        </form>
      </Box>
    </MainWrapper>
  );
};

export default AddStudent;
