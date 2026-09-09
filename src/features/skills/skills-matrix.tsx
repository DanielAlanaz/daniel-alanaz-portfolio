"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { skillGroups } from "@/content/profile";
export function SkillsMatrix() {
  const [selected, setSelected] = useState(0);
  const group = skillGroups[selected];
  return (
    <div className="skills-matrix">
      <div className="skill-categories" aria-label="Skill categories">
        {skillGroups.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setSelected(index)}
            aria-pressed={index === selected}
          >
            <span className="mono">0{index + 1}</span>
            {item.name}
            <ArrowRight size={17} />
          </button>
        ))}
      </div>
      <div className="skill-detail" aria-live="polite">
        <p className="eyebrow">{group.name}</p>
        <h3>{group.description}</h3>
        <div className="skill-chips">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <div className="skill-evidence">
          <p>{group.evidence}</p>
          <Link className="text-link" href={group.href}>
            See it in practice <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
