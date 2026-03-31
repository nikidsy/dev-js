import { useState } from "react";
import {
  Container,
  Input,
  Calendar,
  Day,
  Grid,
  Header
} from "./DatePicker.styles";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function handleSelect(day) {
    const date = new Date(year, month, day);
    setSelectedDate(date);
    setOpen(false);
  }

  function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("pt-BR");
  }

  return (
    <Container>
      <Input
        placeholder="Selecione uma data"
        value={formatDate(selectedDate)}
        readOnly
        onClick={() => setOpen(!open)}
      />

      {open && (
        <Calendar>
          <Header>
            {today.toLocaleString("pt-BR", { month: "long" })} {year}
          </Header>
          <Grid>
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <Day
                key={day}
                onClick={() => handleSelect(day)}
                selected={
                  selectedDate &&
                  selectedDate.getDate() === day
                }>
                {day}
              </Day>
            ))}
          </Grid>
        </Calendar>
      )}
    </Container>
  );
}