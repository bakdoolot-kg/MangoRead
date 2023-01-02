import {Button, Card, CardContent, Typography} from "@mui/material"
import {Link, useNavigate} from "react-router-dom";
import {truncateString} from "../../hooks/truncateString.js";

const CardManga = ({data}) => {
    const navigate = useNavigate()

    return (
        <Link to={`/manga/${data.id}`}>
            <Card style={{
                width: 150,
                height: 220,
                background: `center / cover no-repeat url(${data.image})`,
            }}>
                <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "start", mt: 16}}>
                    <Typography variant="button" sx={{color: "#fff"}}>Год: {data.issue_year}</Typography>
                    <Button
                        fullWidth
                        size="small"
                        sx={{
                            color: "#fff",
                            fontSize: "14px",
                            lineHeight: 1.2,
                            textAlign: "left",
                        }}
                        variant="text"
                    >
                        {truncateString(data?.ru_name, 3, "...")}
                    </Button>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CardManga
