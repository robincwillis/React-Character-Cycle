/***********************************************************************
 * CharCycle - React Component
 * Version:   1.0.0
 * Author:    Robin Willis
 * License:   MIT - http://www.opensource.org/licenses/mit-license.php
 *
 * Inspired by the classic ActionScript effect on yugop.com.
 * Converted from jQuery plugin (jquery.charCycle.0.0.1.js).
 ***********************************************************************/

import { useState, useEffect, useRef, useCallback } from 'react';

const QUOTE_PIC  = "....fgh......_____----hr--~`;'--~/--- ---asd----10?`, ";
const QUOTE_PIC2 = "..-_-10?`,abcdefghijklmnopqrstuvwxyz123456789080-~`;' ";
const QUOTE_PIC3 = "......................................................";

/**
 * CharCycle component
 *
 * Props:
 *   text      {string}  Text to animate. Required.
 *   speed     {number}  Initial ms per cycle. Default: 5.
 *   trigger   {string}  'hover' | 'click' | 'auto'. Default: 'hover'.
 *   className {string}  Additional CSS class(es) for the root element.
 */
function CharCycle({ text = '', speed = 5, trigger = 'hover', className }) {
  const [displayText, setDisplayText] = useState(text);
  const [cycling, setCycling] = useState(false);
  const timerRef  = useRef(null);
  const activeRef = useRef(false); // tracks in-flight animation without stale closure issues

  // Sync display text when the text prop changes while idle
  useEffect(() => {
    if (!activeRef.current) {
      setDisplayText(text);
    }
  }, [text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startCycle = useCallback(() => {
    if (activeRef.current) return;
    activeRef.current = true;
    setCycling(true);

    const quoteLen  = text.length;
    let   quoteMax  = text.length;
    const rndRange  = QUOTE_PIC.length;
    let   quoteLoc  = 0;
    let   curSpeed  = speed;
    let   quoteStr  = text;

    // Pad to quoteMax (mirrors padQuote from the original plugin)
    while (quoteStr.length < quoteMax) quoteStr += ' ';

    function disQuote() {
      let quoteDis = quoteStr.substring(0, quoteLoc);

      for (let i = quoteLoc; i < quoteMax; i++) {
        const rdnum = Math.floor(Math.random() * rndRange);

        if (i < quoteMax && i > quoteMax - 3) {
          quoteDis += QUOTE_PIC3.substring(rdnum, rdnum + 1);
        } else if (i > quoteLoc + 7 && i < quoteLoc + 14) {
          quoteDis += QUOTE_PIC.substring(rdnum, rdnum + 1);
        } else {
          quoteDis += QUOTE_PIC2.substring(rdnum, rdnum + 1);
        }
      }

      quoteLoc += 1;

      if (quoteLoc === quoteLen + 2) {
        activeRef.current = false;
        setCycling(false);
      }

      return quoteDis;
    }

    function loopQuote() {
      const display = disQuote();
      setDisplayText(display);

      if (activeRef.current) {
        timerRef.current = setTimeout(loopQuote, curSpeed);
        curSpeed += 0.75;
      }

      // quoteMax expansion (mirrors original; only fires if quoteMax < quoteLen)
      if (quoteMax < quoteLen) quoteMax += 3;
    }

    loopQuote();
  }, [text, speed]);

  // Auto-trigger on mount
  useEffect(() => {
    if (trigger === 'auto') startCycle();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const eventHandlers = {};
  if (trigger === 'hover') {
    eventHandlers.onMouseEnter = startCycle;
  } else if (trigger === 'click') {
    eventHandlers.onClick = startCycle;
  }

  const classes = ['charcycle', cycling ? 'cycling' : '', className || '']
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...eventHandlers}>
      {displayText}
    </span>
  );
}

export default CharCycle;
