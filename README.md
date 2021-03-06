[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![license](https://img.shields.io/badge/licence-GPL--3-blue.svg)](https://github.com/lgruelas/Python-DataScience-Snippets/blob/master/LICENSE)
[![Build Status](https://api.travis-ci.org/lgruelas/mexicandisasters.svg?branch=master)](https://travis-ci.org/lgruelas/mexicandisasters)


<img align="left" width="100" height="100" src="logo.png">



# Mexican disasters visor

Source code of the consultant software (not yet) implemented in agro.mx to consult the last 1000 years of mexican disasters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Specific for fedora but is pretty easy to follow along in any distribution.

### Prerequisites

Linux
Python 2.7
Flask
MariaDB
npm
node.js

Python and dependencies:
```
sudo dnf -y install python
sudo dnf -y install pip
pip istall --user flask
pip install --user pymysql
```

MariaDB
```
sudo dnf -y install mariadb
sudo dnf -y install mariadb-server
systemctl start mariadb
mysql_secure_installation
```

React
```
sudo dnf -y install npm
sudo dnf -y install nodejs
```

### Installing


## Built With

### Backend
* [Python](https://www.python.org/downloads/release/python-2714/)
* [Flask](http://flask.pocoo.org/docs/0.12/) - Web Framework
* [MariaDB](https://downloads.mariadb.org/mariadb/10.2.14/) - DBMS

### FrontEnd
 * [React](https://reactjs.org/)
 * [Typescript](https://www.typescriptlang.org/)
 * [React-Bootstrap](https://react-bootstrap.github.io/)


## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Erick de la Barrera** - *Lab Leader, Product Owner* - [LabPage](http://agro.mx/delabarrera/)
* **Germán Ruelas** - *Lab Member* - [GitHub](https://github.com/lgruelas)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GPL 3 License - see the [LICENSE.md](LICENSE.md) file for details

## Project Status

Starting

## Acknowledgments
