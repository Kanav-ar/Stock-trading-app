import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-10 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}