import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const BlogCard = ({ title, img }) => {
    return (
        <Card className="grid">
            <CardActionArea>
                <CardMedia
                    className="image"
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The recording starts with patter of a summer squall. Later, a drifting tone like that of a not-quite
                        -tuned-in radio.
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" href="#" className="btn-card">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}

export default BlogCard