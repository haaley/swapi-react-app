import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface MediaProps {
  title: string;
  to: string;
}
export default function MediaCard({ title, to }: MediaProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={to}>
          <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
