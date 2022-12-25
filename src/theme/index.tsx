import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20b2aa",
      contrastText: "white"
    },
  },
  components: {
    MuiAvatar: {
      defaultProps: {
        sx: {
          "&.MuiAvatar-root": {
            img: {
              objectFit: "contain",
            },
            width: "60px",
            height: "60px",
          },
        },
        variant: "rounded",
      },
    },
    MuiTable: {
      defaultProps: {
        sx: {
          ".MuiTableCell-root": {
            border: "none",
          },
          ".MuiTablePagination-spacer": {
            display: "none",
          }
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          "&.MuiSvgIcon-root.sidebar-icon": {
            color: "white",
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        sx: {
          "&.MuiPaper-root": {
            maxWidth: "1000px",
            cursor: "pointer",
          }, 
          "&.MuiPaper-root.post-block": {
            backgroundColor: "lightseagreen",
            color: "white",
          }
        }
      }
    }
  },
});

export function MyThemeProvider<T extends {children: React.ReactNode}>(obj: T): JSX.Element {
	return <ThemeProvider theme={theme}>{obj.children}</ThemeProvider>
}
