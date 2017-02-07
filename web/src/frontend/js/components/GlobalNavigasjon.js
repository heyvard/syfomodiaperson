import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import * as menypunkter from '../menypunkter';

const naermesteLederMenypunkt = {
    navn: 'Nærmeste leder',
    sti: 'naermeste-leder',
    menypunkt: menypunkter.NAERMESTE_LEDER,
};

const motemodulMenypunkt = {
    navn: 'Møteplanlegger',
    sti: 'mote',
    menypunkt: menypunkter.MOETEPLANLEGGER,
};

const tidslinjeMenypunkt = {
    navn: 'Tidslinjen',
    sti: 'tidslinjen',
    menypunkt: menypunkter.TIDSLINJEN,
};

const sykmeldingerMenypunkt = {
    navn: 'Sykmeldinger',
    sti: 'sykmeldinger',
    menypunkt: menypunkter.SYKMELDINGER,
};

class GlobalNavigasjon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusIndex: -1,
        };
    }

    setFocus(fokusId) {
        const ref = this.getRef(fokusId);
        this.refs[ref].focus();
    }

    setFocusIndex(index) {
        this.setState({
            focus: index,
        });
    }

    getRef(index) {
        return `js-${index}`;
    }

    handleKeyDown(e) {
        const DOWN = 40;
        const UP = 38;
        switch (e.keyCode) {
            case DOWN: {
                e.preventDefault();
                const focusIndex = this.state.focus + 1;
                if (focusIndex === this.menypunkter.length) {
                    return;
                }
                this.setState({
                    focusIndex,
                });
                this.setFocus(focusIndex);
                return;
            }
            case UP: {
                e.preventDefault();
                const focusIndex = this.state.focus - 1;
                if (focusIndex === -1) {
                    return;
                }
                this.setState({
                    focusIndex,
                });
                this.setFocus(focusIndex);
                return;
            }
            default: {
                return;
            }
        }
    }

    render() {
        const { fnr, harTilgangMotemodul, aktivtMenypunkt } = this.props;
        this.menypunkter = [naermesteLederMenypunkt, tidslinjeMenypunkt, sykmeldingerMenypunkt];
        if (harTilgangMotemodul) {
            this.menypunkter.push(motemodulMenypunkt);
        }

        return (<ul aria-label="Navigasjon" className="navigasjon">
        {
            this.menypunkter.map(({ navn, sti, menypunkt }, index) => {
                let className = 'navigasjonspanel';
                if (menypunkt === aktivtMenypunkt) {
                    className = `${className} navigasjonspanel--aktiv`;
                }
                return (<li key={index} className="navigasjon__element">
                    <a ref={this.getRef(index)} className={className} onFocus={() => {
                        this.setFocusIndex(index);
                    }} onKeyDown={(e) => {
                        this.handleKeyDown(e);
                    }} onClick={(e) => {
                        e.preventDefault();
                        // Dette gjøres slik for å slippe å laste siden på nytt.
                        // <Link /> fra react-router kan ikke brukes da den ikke støtter ref-attributtet.
                        browserHistory.push(`/sykefravaer/${fnr}/${sti}`);
                    }} href={`/sykefravaer/${fnr}/${sti}`}>{navn}</a>
                </li>);
            })
        }
        </ul>);
    }
}

GlobalNavigasjon.propTypes = {
    fnr: PropTypes.string,
    harTilgangMotemodul: PropTypes.bool,
    aktivtMenypunkt: PropTypes.string,
};

export default GlobalNavigasjon;
