import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import FormInput from "./FormInput";
import Spline from "@splinetool/react-spline";
import { Wrapper,Content,WelcomeText, Container} from "./SignUpElements";
import swal from "sweetalert";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [values, setValues] = useState({
    email: "",
    matamask: "",
  });

  const [auth, setAuth] = useState({
    discord: "",
    github: "",
  });
  const [connect, setConnect] = useState({
    discord: "Connect Discord",
    github: "Connect GitHub",
  });
  const [disabled, setDisabled] = useState({
    email: true,
    matamask: true,
  });
  const [cookies, setCookie] = useCookies(["auth", "discord"]);

  let navigate = useNavigate();

  useEffect(() => {
    let discord, github;
    if (window.location.hash)
      discord = window.location.hash
        .slice(1)
        .split("&")
        .map((hash) => hash.split("="));
    if (window.location.search)
      github = window.location.search
        .slice(1)
        .split("&")
        .map((search) => search.split("="));
    if (discord) {
      const discordMap = new Map(discord);
      const token_type = discordMap.get("token_type");
      const access_token = discordMap.get("access_token");
      if (token_type && access_token && cookies.auth) {
        axios
          .post(
            `${process.env.REACT_APP_URL}discord`,
            {
              token_type,
              access_token,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${cookies.auth}`,
              },
            }
          )
          .then(({ data }) => {
            setDisabled({
              email: false,
              matamask: false,
            });
            setCookie("discord", "connected", { path: "/" });
            if (data.data.email) {
              setValues({
                matamask: data.data.metamask_address,
                email: data.data.email,
              });
            }
            setConnect({
              discord: "Connected Discord",
              github: "Connected GitHub",
            });
            navigate("/signup");
          })
          .catch(() => {});
      }
    } else if (github) {
      const githubMap = new Map(github);
      const code = githubMap.get("code");
      if (code) {
        let body = {};
        if (cookies.auth) {
          body = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${cookies.auth}`,
            },
          };
        }
        axios
          .post(
            `${process.env.REACT_APP_URL}github`,
            {
              code,
            },
            body
          )
          .then(({ data }) => {
            setDisabled({
              email: false,
              matamask: false,
            });
            setCookie("auth", data.hash, { path: "/" });
            navigate("/signup");
          })
          .catch(() => {});
      }
    } else {
      let body = {};
      if (cookies.auth) {
        body = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${cookies.auth}`,
          },
        };
      }
      axios
        .get(`${process.env.REACT_APP_URL}`, body)
        .then(({ data }) => {
          if (data) {
            setAuth({
              discord: data.discord_auth_url,
              github: data.github_auth_url,
            });
            switch (data.connected) {
              case 0: {
                setDisabled({
                  email: true,
                  matamask: true,
                });
                break;
              }
              case 1: {
                setDisabled({
                  email: false,
                  matamask: false,
                });
                setConnect({
                  discord: "Connect Discord",
                  github: "GitHub Connected",
                });
                break;
              }
              case 2: {
                setDisabled({
                  email: false,
                  matamask: false,
                });
                setConnect({
                  discord: "Discord Connected",
                  github: "GitHub Connected",
                });
                setValues({
                  email: data.email,
                  matamask: data.metamask_address,
                });
                break;
              }
              default: {
                break;
              }
            }
          }
        })
        .catch(() => {});
    }
  }, [setCookie, navigate, cookies]);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",

      className: "form-control",
      disabled: disabled.email,
    },

    {
      id: 2,
      name: "matamask",
      type: "text",
      placeholder: "Metamask Account Address",
      label: "Metamask",
      pattern: `^[0x]{0,1}[A-Za-z0-9]{2,41}$`,
      required: false,
      className: "form-control",
      disabled: disabled.matamask,
    },
  ];

  const handleFormSubmit = () => {
    if (!cookies.auth) {
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_URL}submit`,
        {
          email: values.email,
          metamask_address: values.matamask,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${cookies.auth}`,
          },
        }
      )
      .then(() => {
        swal("All Done!", " Form Successfully Submitted!", "success");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div className="app">
      <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />
      
        <Content>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
        <Container>
        <form onSubmit={handleSubmit}>
            <WelcomeText>Metafy</WelcomeText>
            <button
              className="buttons btn-wdr"
              disabled={cookies.auth ? true : false}
            >
              <a href={auth.github} alt="github" className="button">
                {connect.github}
              </a>
            </button>

            <button
              className="buttons btn-wdr"
              disabled={cookies.discord ? true : false}
            >
              <a href={auth.discord} alt="discord" className="button">
                {connect.discord}
              </a>
            </button>

            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button className="button_submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </Container>
          
        </Content>
      </div>
    </Wrapper>
  );
};

export default SignUp;
