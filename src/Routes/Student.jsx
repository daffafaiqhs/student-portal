import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {
  Flex,
  Heading,
  Spacer,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import CustomInput from "../components/CustomInput";
import MainWrapper from "../components/MainWrapper";

const Student = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [reload, setReload] = useState(false);

  const { studentId } = useParams();

  useEffect(() => {
    const loadStudents = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/student`);
        const data = await response.json();
        setStudentsData(data);
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!studentId) {
      loadStudents();
    }
  }, [reload, studentId]);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3001/student/${e.target.value}`, {
        method: "DELETE",
      });
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setStudents(studentsData);
    } else {
      setStudents(
        studentsData.filter((student) => {
          return student.faculty === e.target.value;
        })
      );
    }
  };

  return (
    <>
      <MainWrapper>
        {!studentId ? (
          <>
            <Flex
              mb={"40px"}
              // className="flex justify-between mb-10"
            >
              <Heading
                as="h1"
                // className="font-bold text-3xl"
              >
                All Student
              </Heading>

              <Spacer />

              <CustomInput
                dataTestId="filter"
                inputType="select"
                defaultValue="All"
                options={[
                  "Fakultas Ekonomi",
                  "Fakultas Ilmu Sosial dan Politik",
                  "Fakultas Teknik",
                  "Fakultas Teknologi Informasi dan Sains",
                ]}
                onChangeFunction={handleFilter}
              />
            </Flex>

            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Full Name</Th>
                    <Th>Faculty</Th>
                    <Th>Program Study</Th>
                    <Th>Option</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {loading ? (
                    <Tr>
                      <Td colSpan="5" textAlign="center" py="16px">
                        <Text textStyle="italic">Loading ...</Text>
                      </Td>
                    </Tr>
                  ) : null}
                  {students?.map((student) => (
                    <Tr
                      key={student.id}
                      _odd={{ bg: "brand.sky.100" }}
                      _hover={{ bg: "brand.sky.800", color: "white" }}
                    >
                      <Td className="w-20">{student.id}</Td>
                      <Td width="1/4">
                        <Link to={student.id}>{student.fullname}</Link>
                      </Td>
                      <Td width="1/3">{student.faculty}</Td>
                      <Td width="1/4">{student.programStudy}</Td>
                      <Td>
                        <Button
                          data-testid={`delete-${student.id}`}
                          color="#dc2626"
                          variant="unstyled"
                          value={student.id}
                          onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Outlet context={[reload, setReload]} />
        )}
      </MainWrapper>
    </>
  );
};

export default Student;
