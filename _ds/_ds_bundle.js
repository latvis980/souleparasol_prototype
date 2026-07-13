/* @ds-bundle: {"format":3,"namespace":"SousLeParasolDesignSystem_f5c8cc","components":[{"name":"FragranceSpine","sourcePath":"components/brand/FragranceSpine.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/FragranceSpine.jsx":"1992b0ce79b8","components/brand/Wordmark.jsx":"089c93f7b5d7","components/core/Button.jsx":"43f58ef4dd0d","components/core/Card.jsx":"1c4bd43f25e1","components/core/Rule.jsx":"7eacd656c1ac","components/core/Tag.jsx":"b785c0bc5688","components/forms/Checkbox.jsx":"229c350ed312","components/forms/Field.jsx":"ba39cbc09a46","components/forms/Switch.jsx":"62d3612c005a","components/navigation/Tabs.jsx":"55da6dc8fe5a","ui_kits/maison/Chrome.jsx":"a4909456d032","ui_kits/maison/Detail.jsx":"1f5b780dc4c1","ui_kits/maison/Home.jsx":"971d68c8c31c","ui_kits/maison/data.js":"90e4513ccf10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SousLeParasolDesignSystem_f5c8cc = window.SousLeParasolDesignSystem_f5c8cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/FragranceSpine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — FragranceSpine
 * The signature per-fragrance label: a colour spine (the narrow bar from the
 * packaging) beside the engraved name and its three-word attribute code.
 * `orientation="vertical"` renders the spine as a tall bar (shelf view).
 */
const PRESETS = {
  vert: {
    name: "Vert Cru",
    attrs: "Force · Mineral · Growth",
    color: "var(--vert)",
    place: "Pantelleria"
  },
  bleu: {
    name: "Bleu Nu",
    attrs: "Silence · Horizon · Breath",
    color: "var(--bleu)",
    place: "Patmos"
  },
  blanc: {
    name: "Blanc Froissé",
    attrs: "Skin · Fabric · Intimacy",
    color: "var(--blanc)",
    place: "Comporta"
  },
  rouge: {
    name: "Rouge Glacé",
    attrs: "Radiance · Tension · Suspension",
    color: "var(--rouge)",
    place: "Saint-Moritz"
  },
  or: {
    name: "L'Or Graphique",
    attrs: "Geometry · Rhythm · Control",
    color: "var(--or)",
    place: "Paris"
  }
};
function FragranceSpine({
  fragrance,
  name,
  attrs,
  color,
  place,
  orientation = "horizontal",
  showPlace = false,
  style,
  ...rest
}) {
  const p = fragrance && PRESETS[fragrance] || {};
  const _name = name ?? p.name ?? "Sous le Parasol";
  const _attrs = attrs ?? p.attrs ?? "";
  const _color = color ?? p.color ?? "var(--gold-400)";
  const _place = place ?? p.place;
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "inline-flex",
        alignItems: "stretch",
        gap: "14px",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "5px",
        borderRadius: "2px",
        background: _color,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-heading)",
        letterSpacing: "0.04em",
        color: "var(--text-primary)"
      }
    }, _name), _attrs && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-deco)",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginTop: "6px"
      }
    }, _attrs), showPlace && _place && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-deco)",
        fontSize: "10px",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: "var(--text-secondary)",
        marginTop: "6px"
      }
    }, _place)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "4px",
      width: "44px",
      borderRadius: "2px",
      background: _color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-heading)",
      letterSpacing: "0.04em",
      color: "var(--text-primary)"
    }
  }, _name), _attrs && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, _attrs), showPlace && _place && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, _place));
}
Object.assign(__ds_scope, { FragranceSpine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FragranceSpine.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Wordmark
 * The typeset house logo: engraved display caps with the small "LE" lifted
 * between the two words. Purely typographic (no image dependency) so it is
 * portable across surfaces. Optional ruled tagline beneath.
 */
function Wordmark({
  size = "md",
  stacked = true,
  tagline = "Paris · 1936",
  showTagline = false,
  tone = "ink",
  style,
  ...rest
}) {
  const sizes = {
    sm: 18,
    md: 28,
    lg: 44,
    xl: 64
  };
  const fs = sizes[size] || sizes.md;
  const color = tone === "light" ? "var(--sand-50)" : "var(--ink-900)";
  const ruleColor = tone === "light" ? "var(--border-on-dark)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: `${Math.round(fs * 0.42)}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      lineHeight: 1.04,
      color,
      textAlign: "center",
      fontSize: `${fs}px`
    }
  }, "Sous", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.46em",
      letterSpacing: "0.14em",
      verticalAlign: "0.18em",
      margin: "0 0.14em"
    }
  }, "le"), stacked ? /*#__PURE__*/React.createElement("br", null) : " ", "Parasol"), showTagline && tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: `${Math.max(9, Math.round(fs * 0.28))}px`,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: tone === "light" ? "var(--text-on-dark-muted)" : "var(--umber-700)",
      borderTop: `1px solid ${ruleColor}`,
      borderBottom: `1px solid ${ruleColor}`,
      padding: "5px 12px",
      whiteSpace: "nowrap"
    }
  }, tagline));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Button
 * Quiet, engraved CTAs. Labels are set in the deco face, uppercase and
 * tracked. Variants map to the brand's restraint: ink fill for the single
 * primary action, hairline outline for secondary, bare text for tertiary.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: "10px",
      tracking: "0.24em"
    },
    md: {
      padding: "13px 26px",
      fontSize: "11px",
      tracking: "0.26em"
    },
    lg: {
      padding: "17px 38px",
      fontSize: "12px",
      tracking: "0.28em"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.7em",
    width: full ? "100%" : "auto",
    padding: s.padding,
    fontFamily: "var(--font-deco)",
    fontWeight: 400,
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    transition: "background var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)",
    WebkitFontSmoothing: "antialiased",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--ink-900)",
      color: "var(--sand-50)",
      borderColor: "var(--ink-900)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink-900)",
      borderColor: "var(--border-strong)"
    },
    gold: {
      background: "var(--gold-400)",
      color: "var(--ink-900)",
      borderColor: "var(--gold-400)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent",
      padding: s.padding.replace(/\d+px (\d+)px/, m => m) // keep
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: "var(--umber-800)",
      borderColor: "var(--umber-800)"
    },
    secondary: {
      background: "var(--sand-200)",
      borderColor: "var(--ink-900)"
    },
    gold: {
      background: "var(--gold-500)",
      borderColor: "var(--gold-500)"
    },
    ghost: {
      color: "var(--ink-900)"
    }
  };
  const composed = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...(hover && !disabled ? hoverStyles[variant] || {} : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: composed
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Card
 * A warm-paper surface lifted into the light. `tone` sets the surface,
 * `elevation` the warm shadow, `texture` adds the procedural sand-paper wash.
 * `interactive` lifts the card slightly on hover (the "emerge" gesture).
 */
function Card({
  children,
  tone = "card",
  elevation = "sm",
  texture = false,
  interactive = false,
  padded = true,
  style,
  ...rest
}) {
  const surfaces = {
    card: "var(--surface-card)",
    raised: "var(--surface-raised)",
    canvas: "var(--surface-canvas)",
    page: "var(--surface-page)",
    inverse: "var(--surface-inverse)"
  };
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    cast: "var(--shadow-cast)"
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    className: texture ? "slp-paper" : undefined,
    style: {
      background: texture ? undefined : surfaces[tone] || surfaces.card,
      color: tone === "inverse" ? "var(--text-on-dark)" : "var(--text-primary)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-soft)",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : shadows[elevation] || shadows.sm,
      padding: padded ? "var(--space-5)" : 0,
      transform: interactive && hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-emerge), box-shadow var(--dur-base) var(--ease-emerge)",
      overflow: "hidden",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Rule
 * The engraved hairline used throughout the brand. With `label`, it becomes
 * the packaging "ruled lockup": deco text framed by two fine rules.
 */
function Rule({
  label,
  weight = "hairline",
  style,
  ...rest
}) {
  const color = weight === "strong" ? "var(--border-strong)" : "var(--border-hairline)";
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 0,
        borderTop: `1px solid ${color}`,
        margin: "var(--space-5) 0",
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      margin: "var(--space-5) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Tag
 * A small, tracked deco label. Two shapes: `pill` (soft) and `square`
 * (engraved). An optional `spine` color renders the per-fragrance colour
 * spine as a leading bar — the device used on the packaging.
 */
function Tag({
  children,
  tone = "neutral",
  shape = "square",
  spine,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--sand-200)",
      fg: "var(--umber-700)",
      bd: "transparent"
    },
    outline: {
      bg: "transparent",
      fg: "var(--text-secondary)",
      bd: "var(--border-strong)"
    },
    ink: {
      bg: "var(--ink-900)",
      fg: "var(--sand-50)",
      bd: "var(--ink-900)"
    },
    gold: {
      bg: "var(--or-tint)",
      fg: "var(--gold-500)",
      bd: "transparent"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6em",
      padding: "5px 11px",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      fontWeight: 400,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), spine && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "1px",
      background: spine,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Checkbox
 * A small squared check (the brand is rectilinear). Hairline box that fills
 * with ink when selected; a fine gold check mark.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : undefined;
  const cid = id || autoId;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: "18px",
      height: "18px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: defaultChecked,
    onChange: handle,
    disabled: disabled,
    style: {
      appearance: "none",
      width: "18px",
      height: "18px",
      margin: 0,
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${on ? "var(--ink-900)" : "var(--border-strong)"}`,
      background: on ? "var(--ink-900)" : "var(--surface-card)",
      cursor: "inherit",
      transition: "background var(--dur-fast) var(--ease-quiet), border-color var(--dur-fast) var(--ease-quiet)"
    }
  }, rest)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 18 18",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "18px",
      height: "18px",
      pointerEvents: "none",
      opacity: on ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-quiet)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 9.2 L7.6 12.2 L13.5 5.6",
    fill: "none",
    stroke: "var(--gold-300)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Field
 * An underline-style text input. Restrained: a deco label, a hairline that
 * deepens to ink on focus, no boxy chrome. Suits newsletter and waitlist
 * forms where the brand stays quiet.
 */
function Field({
  label,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  invalid = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId ? React.useId() : undefined;
  const fieldId = id || autoId;
  const lineColor = invalid ? "var(--rouge)" : focus ? "var(--ink-900)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.26em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      background: "transparent",
      border: 0,
      borderBottom: `1px solid ${lineColor}`,
      padding: "8px 2px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-quiet)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: invalid ? "var(--rouge)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sous Le Parasol — Switch
 * A quiet toggle. The track deepens to ink when on; the knob is warm paper.
 * Restrained motion (the "quiet" easing), no bounce.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : undefined;
  const sid = id || autoId;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: sid,
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: "relative",
      width: "42px",
      height: "24px",
      flex: "none",
      padding: 0,
      border: `1px solid ${on ? "var(--ink-900)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--ink-900)" : "var(--sand-200)",
      cursor: "inherit",
      transition: "background var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "2px",
      left: on ? "20px" : "2px",
      width: "18px",
      height: "18px",
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--gold-300)" : "var(--surface-raised)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-quiet), background var(--dur-base) var(--ease-quiet)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Sous Le Parasol — Tabs
 * Engraved navigation. Deco caps with an ink underline that slides under the
 * active tab. Used for product detail (Notes / The Place / Ritual) and the
 * editorial sections.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  align = "start",
  style
}) {
  const first = items[0] && (items[0].value ?? items[0]);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const isControlled = value !== undefined;
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      justifyContent: align === "center" ? "center" : align === "end" ? "flex-end" : "flex-start",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(v),
      style: {
        position: "relative",
        background: "transparent",
        border: 0,
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-deco)",
        fontSize: "11px",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: isActive ? "var(--ink-900)" : "var(--text-muted)",
        transition: "color var(--dur-base) var(--ease-quiet)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "-1px",
        height: "1px",
        background: "var(--ink-900)",
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform var(--dur-base) var(--ease-emerge)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/maison/Chrome.jsx
try { (() => {
/* Sous Le Parasol — site chrome: announcement, header, footer */
const {
  Wordmark,
  Button,
  Field
} = window.SousLeParasolDesignSystem_f5c8cc;
function Announcement() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-900)",
      color: "var(--text-on-dark-muted)",
      textAlign: "center",
      padding: "8px 16px",
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.28em",
      textTransform: "uppercase"
    }
  }, "The art of disappearing \xB7 Pre-launch \xB7 Paris 1936");
}
function NavLink({
  children,
  onClick,
  active
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: "4px 0",
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: active || h ? "var(--ink-900)" : "var(--text-muted)",
      transition: "color var(--dur-base) var(--ease-quiet)"
    }
  }, children);
}
function Header({
  onHome,
  onIndex,
  bag = 0,
  view
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(239,231,215,0.86)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1120px",
      margin: "0 auto",
      padding: "0 40px",
      height: "76px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    onClick: onIndex,
    active: view === "index" || view === "detail"
  }, "The Five"), /*#__PURE__*/React.createElement(NavLink, {
    onClick: onHome
  }, "The Light Axis"), /*#__PURE__*/React.createElement(NavLink, null, "Maison")), /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm",
    stacked: false
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "28px",
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(NavLink, null, "Search"), /*#__PURE__*/React.createElement(NavLink, null, "Account"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ink-900)"
    }
  }, "Bag (", bag, ")"))));
}
function Footer({
  onWaitlist
}) {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--text-on-dark)",
      padding: "72px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1120px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "60px",
      alignItems: "start",
      paddingBottom: "48px",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-on-dark-muted)",
      marginBottom: "18px"
    }
  }, "Enter early"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      letterSpacing: "0.03em",
      color: "var(--sand-50)",
      margin: "0 0 10px",
      lineHeight: 1.15
    }
  }, "Learn how to look."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-on-dark-muted)",
      maxWidth: "380px",
      margin: 0
    }
  }, "An invitation to approach slowly. No urgency, no noise \u2014 only the next light.")), /*#__PURE__*/React.createElement("div", null, done ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      color: "var(--gold-300)",
      letterSpacing: "0.03em"
    }
  }, "Received. We will write when the light is right.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      "--text-muted": "var(--text-on-dark-muted)",
      "--text-primary": "var(--sand-50)",
      "--border-strong": "var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "you@maison.fr",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => {
      setDone(true);
      onWaitlist && onWaitlist();
    }
  }, "Join the waitlist")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "28px",
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sous le Parasol \xB7 Paris 1936"), /*#__PURE__*/React.createElement("span", null, "Remember the light"))));
}
Object.assign(window, {
  Announcement,
  Header,
  Footer,
  NavLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maison/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/maison/Detail.jsx
try { (() => {
/* Sous Le Parasol — Fragrance detail screen */
const {
  Button: DB,
  Tag: DT,
  Rule: DR,
  Tabs: DTabs,
  FragranceSpine: DFS
} = window.SousLeParasolDesignSystem_f5c8cc;
function Detail({
  fragranceKey,
  onAdd,
  onSelect
}) {
  const D = window.SLP_DATA;
  const f = D.fragrances.find(x => x.key === fragranceKey) || D.fragrances[0];
  const [tab, setTab] = React.useState("Notes");
  const [size, setSize] = React.useState("100 ml");
  const tabCopy = {
    Notes: f.notes,
    "The Place": `${f.place} — ${f.line}`,
    Ritual: "Release the tie in the scent's colour, the way you free a furled parasol, and the pack opens."
  };
  const others = D.fragrances.filter(x => x.key !== f.key).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "calc(100vh - 76px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: f.tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, f.img ? /*#__PURE__*/React.createElement("img", {
    src: f.img,
    alt: f.name,
    style: {
      width: "72%",
      maxHeight: "78%",
      objectFit: "contain",
      mixBlendMode: "multiply",
      filter: "drop-shadow(24px 30px 50px rgba(52,40,27,0.28))"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "180px",
      color: f.color,
      opacity: 0.4
    }
  }, f.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "8px",
      background: f.color
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "64px 72px",
      maxWidth: "600px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "18px"
    }
  }, f.code, " \xB7 ", f.place), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "60px",
      letterSpacing: "0.03em",
      color: "var(--ink-900)",
      margin: "0 0 14px",
      lineHeight: 1.02
    }
  }, f.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "21px",
      fontStyle: "italic",
      color: "var(--text-secondary)",
      margin: "0 0 28px",
      letterSpacing: "0.01em"
    }
  }, f.line), /*#__PURE__*/React.createElement(DTabs, {
    items: ["Notes", "The Place", "Ritual"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      margin: "22px 0 32px",
      minHeight: "76px"
    }
  }, tabCopy[tab]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginBottom: "28px"
    }
  }, ["50 ml", "100 ml"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      padding: "10px 18px",
      cursor: "pointer",
      background: size === s ? "var(--sand-200)" : "transparent",
      border: `1px solid ${size === s ? "var(--ink-900)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--ink-900)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(DB, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(f)
  }, "Add to bag \u2014 \u20AC", size === "100 ml" ? "245" : "165"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "10px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Eau de Parfum")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 40px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1120px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(DR, {
    label: "The other summers"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginTop: "36px"
    }
  }, others.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.key,
    onClick: () => onSelect(o.key),
    style: {
      textAlign: "left",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      borderRadius: "var(--radius-md)",
      background: o.tint,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-sm)"
    }
  }, o.img ? /*#__PURE__*/React.createElement("img", {
    src: o.img,
    alt: o.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "multiply"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "44px",
      color: o.color,
      opacity: 0.5
    }
  }, o.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: "4px",
      height: "30px",
      borderRadius: "2px",
      background: o.color
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      letterSpacing: "0.03em",
      color: "var(--ink-900)",
      marginTop: "12px"
    }
  }, o.name)))))));
}
Object.assign(window, {
  Detail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maison/Detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/maison/Home.jsx
try { (() => {
/* Sous Le Parasol — Home screen sections */
const {
  Button: B,
  Tag: T,
  Card: C,
  Rule: R,
  FragranceSpine: FS
} = window.SousLeParasolDesignSystem_f5c8cc;
function Hero({
  onExplore
}) {
  const D = window.SLP_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "82vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--sand-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 64px",
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "26px"
    }
  }, "Five Experiential Summers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(48px, 6vw, 78px)",
      lineHeight: 1.02,
      letterSpacing: "0.03em",
      color: "var(--ink-900)",
      margin: "0 0 24px"
    }
  }, "Remember", /*#__PURE__*/React.createElement("br", null), "the light."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: "400px",
      margin: "0 0 36px"
    }
  }, "A perfume is a vessel. An amphora. It holds the atmosphere of a place, its air, its temperature, its memory \u2014 carried first through scent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(B, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Discover the five"), /*#__PURE__*/React.createElement(B, {
    variant: "ghost",
    size: "lg"
  }, "The Light Axis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.hero,
    alt: "Amber flacon in golden-hour light",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })));
}
function FiveSummers({
  onSelect
}) {
  const D = window.SLP_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 40px",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1120px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "16px"
    }
  }, "The Collection"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px",
      letterSpacing: "0.04em",
      color: "var(--ink-900)",
      margin: 0
    }
  }, "Five codes for disappearing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "20px"
    }
  }, D.fragrances.map(f => /*#__PURE__*/React.createElement(FragranceTile, {
    key: f.key,
    f: f,
    onSelect: onSelect
  })))));
}
function FragranceTile({
  f,
  onSelect
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect(f.key),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      textAlign: "left",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "3 / 4",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: f.tint,
      boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: h ? "translateY(-4px)" : "none",
      transition: "transform var(--dur-base) var(--ease-emerge), box-shadow var(--dur-base) var(--ease-emerge)"
    }
  }, f.img ? /*#__PURE__*/React.createElement("img", {
    src: f.img,
    alt: f.name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "multiply"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: "46px",
      color: f.color,
      opacity: 0.5
    }
  }, f.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: "4px",
      height: "34px",
      borderRadius: "2px",
      background: f.color
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "19px",
      letterSpacing: "0.03em",
      color: "var(--ink-900)"
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "9.5px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: "5px"
    }
  }, f.attrs)));
}
function LightAxis() {
  const D = window.SLP_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-900)",
      color: "var(--text-on-dark)",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1120px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--text-on-dark-muted)",
      marginBottom: "22px"
    }
  }, "The Light Axis"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "44px",
      letterSpacing: "0.03em",
      color: "var(--sand-50)",
      lineHeight: 1.12,
      margin: "0 0 24px"
    }
  }, "Light reveals.", /*#__PURE__*/React.createElement("br", null), "Shadow protects."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.7,
      color: "var(--text-on-dark-muted)",
      maxWidth: "420px",
      margin: 0
    }
  }, "The bottle behaves as a reservoir of light. Colour is not applied to the surface; it emerges from within. It is revealed, not declared. The object opens only when the light is right.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "12px",
      height: "440px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.axis.light,
    alt: "Light",
    style: {
      gridRow: "1 / 3",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--radius-md)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.axis.shadow,
    alt: "Shadow",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--radius-md)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.axis.reservoir,
    alt: "Reservoir of light",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--radius-md)"
    }
  }))));
}
function MaterialsBand() {
  const D = window.SLP_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "420px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.materials,
    alt: "Marine-canvas sleeves",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(33,25,19,0.42), rgba(33,25,19,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1120px",
      margin: "0 auto",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-deco)",
      fontSize: "11px",
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "var(--sand-50)",
      marginBottom: "16px"
    }
  }, "Materiality"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px",
      letterSpacing: "0.03em",
      color: "var(--sand-50)",
      maxWidth: "440px",
      lineHeight: 1.14,
      margin: 0,
      textShadow: "0 2px 20px rgba(0,0,0,0.3)"
    }
  }, "Wood, metal, cotton, and the sand it stands in.")));
}
Object.assign(window, {
  Hero,
  FiveSummers,
  FragranceTile,
  LightAxis,
  MaterialsBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maison/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/maison/data.js
try { (() => {
/* Sous Le Parasol — UI kit data. Plain global (no module). */
window.SLP_DATA = {
  fragrances: [{
    key: "vert",
    name: "Vert Cru",
    code: "Le Vert Volcanique",
    attrs: "Force · Mineral · Growth",
    color: "var(--vert)",
    tint: "var(--vert-tint)",
    place: "Pantelleria",
    line: "Groves on lava. The sun smells green.",
    notes: "Fig leaf and bergamot over volcanic mineral; a base of dry vetiver.",
    img: "../../assets/imagery/bottle-vert-cru.png"
  }, {
    key: "bleu",
    name: "Bleu Nu",
    code: "Le Bleu Sacré",
    attrs: "Silence · Horizon · Breath",
    color: "var(--bleu)",
    tint: "var(--bleu-tint)",
    place: "Patmos",
    line: "A still sea between two coasts.",
    notes: "Salt and white musk over sea lavender; ambergris and warm stone.",
    img: null
  }, {
    key: "blanc",
    name: "Blanc Froissé",
    code: "Le Blanc Froissé",
    attrs: "Skin · Fabric · Intimacy",
    color: "var(--blanc)",
    tint: "var(--blanc-tint)",
    place: "Comporta",
    line: "Light grazing a bare shoulder.",
    notes: "Cotton blossom and iris over warm skin; a base of soft cedar.",
    img: "../../assets/imagery/bottle-blanc-froisse.png"
  }, {
    key: "rouge",
    name: "Rouge Glacé",
    code: "Le Rouge Enneigé",
    attrs: "Radiance · Tension · Suspension",
    color: "var(--rouge)",
    tint: "var(--rouge-tint)",
    place: "Saint-Moritz",
    line: "Sun held against snow.",
    notes: "Pink pepper and saffron over rose; a base of suede and amber.",
    img: null
  }, {
    key: "or",
    name: "L'Or Graphique",
    code: "L'Or Graphique",
    attrs: "Geometry · Rhythm · Control",
    color: "var(--or)",
    tint: "var(--or-tint)",
    place: "Paris",
    line: "Shade as an act of sophistication.",
    notes: "Immortelle and tonka over honeyed amber; a base of labdanum.",
    img: "../../assets/imagery/pack-paper-tray-or.png"
  }],
  hero: "../../assets/imagery/bottle-canvas-goldenhour.png",
  axis: {
    light: "../../assets/imagery/bottle-canvas-goldenhour.png",
    shadow: "../../assets/imagery/texture-canvas-shadow.png",
    reservoir: "../../assets/imagery/texture-faceted-amber.png"
  },
  materials: "../../assets/imagery/pack-canvas-set-pantelleria.png"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maison/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FragranceSpine = __ds_scope.FragranceSpine;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
