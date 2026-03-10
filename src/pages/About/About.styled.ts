import styled from "styled-components";

interface AboutTypeProps {
  $status: string;
}

export const AboutContainer = styled.div`
  width: 70%;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const AboutTitle = styled.h1`
  color: #cccccc;
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const AboutText = styled.p`
  padding-bottom: 20px;
  color: #a7a7a7;
`;

export const AboutExperiencesContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #ebeaed;
`;

export const ExperienceTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ExperienceBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

export const AboutRole = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #757ae7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CompanyLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b3b1b1;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const AboutType = styled.span<AboutTypeProps>`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;

  color: ${(props) => {
    if (props.$status === "estagio") return "#2563eb";
    if (props.$status === "clt") return "#16a34a";
    if (props.$status === "pj") return "#ca8a04";
    if (props.$status === "tecnologo") return "#7c3aed";
    if (props.$status === "graduacao") return "#7c3aed";
    if (props.$status === "pos-graduacao") return "#6d28d9";
    return "#555";
  }};

  background-color: ${(props) => {
    if (props.$status === "estagio") return "#dbeafe";
    if (props.$status === "clt") return "#dcfce7";
    if (props.$status === "pj") return "#fef9c3";
    if (props.$status === "tecnologo") return "#ede9fe";
    if (props.$status === "graduacao") return "#ede9fe";
    if (props.$status === "pos-graduacao") return "#ddd6fe";
    return "#f3f4f6";
  }};
`;

export const AboutDates = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b3b1b1;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AboutContainerAcademic = styled.div`
  width: 70%;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 0px 40px;
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
    padding-bottom: 50px;
  }
`;

export const AboutAcademicContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #ebeaed;
`;
