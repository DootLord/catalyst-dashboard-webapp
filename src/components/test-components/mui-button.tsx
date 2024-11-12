import Button from "@mui/material/Button";

interface MuiButtonProps {
    clickEvent: (value: number) => void;
    incrementValue: number;
}

export default function MuiButton({ clickEvent, incrementValue }: MuiButtonProps) {
    return <Button variant="contained" onClick={() => { clickEvent(incrementValue) }}> Increment By {incrementValue}! </Button>
}