import Button from "@mui/material/Button";

interface MuiButtonProps {
    clickEvent: () => void;
    text: string;
}

export default function MuiSubmitButton({ clickEvent, text }: MuiButtonProps) {
    return <Button variant="contained" onClick={() => { clickEvent() }}> {text} </Button>
}