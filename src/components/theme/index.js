import { createMuiTheme } from "@material-ui/core";
import tinyColor from 'tinycolor2';

const colorPrimary = "#5ea9dd";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:colorPrimary,
            light:tinyColor(colorPrimary).lighten().toHexString()
        }
    },
    override:{
        MuiTypography:{
            root:{
                fontFamily:"shabnam !important",
                fontSize:"2rem !important"
            }
        }
    }
})

export default theme;