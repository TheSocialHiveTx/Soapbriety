import React from 'react';
import { NavigationPage } from '../types';
import { EVENTS } from '../data/content';
import { HeartHandshake, Users, Calendar, MapPin, Clock, ShieldCheck, Sparkles, Utensils, Award } from 'lucide-react';

interface WheelhousePageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const WheelhousePage: React.FC<WheelhousePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#17291D] via-[#0E1711] to-[#1C1510] border border-[#2B4232] p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-mono-num font-bold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4" />
            THE WHEELHOUSE RECOVERY COMMUNITY CENTER
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-black text-[#F5F2EB]">
            Where Fresh Starts Take Root
          </h1>
          <p className="text-base sm:text-lg text-[#A3B3A6] leading-relaxed">
            The Wheelhouse is a non-profit community recovery space funded directly by Soapbriety purchases. We provide free peer support circles, weekly fellowship dinners, crisis intervention transit passes, and volunteer opportunities for anyone rebuilding their life.
          </p>
        </div>
      </div>

      {/* Core Programs Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif-heading font-black text-[#F5F2EB]">
          Wheelhouse Core Recovery Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
            <Users className="w-8 h-8 text-[#4ADE80]" />
            <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
              Weekly Peer Support Circles
            </h3>
            <p className="text-xs text-[#9EB0A1] leading-relaxed">
              Safe, judgment-free group circles facilitated by trained peers in long-term recovery. Hosted 5 nights a week.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
            <Utensils className="w-8 h-8 text-[#C87A4B]" />
            <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
              Friday Night Fellowship Dinners
            </h3>
            <p className="text-xs text-[#9EB0A1] leading-relaxed">
              Complimentary hot meals served every Friday night to foster community connection and fight social isolation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121814] border border-[#243428] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#86EFAC]" />
            <h3 className="font-serif-heading font-bold text-lg text-[#F5F2EB]">
              Hygiene & Shelter Transit Packs
            </h3>
            <p className="text-xs text-[#9EB0A1] leading-relaxed">
              Distributing essential cold-process soaps, dental care, and bus passes to local recovery transition houses.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Calendar */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-num font-bold text-[#C87A4B] uppercase tracking-widest">
              COMMUNITY CALENDAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-black text-[#F5F2EB]">
              Upcoming Wheelhouse Events
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-[#121714] border border-[#233127] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0C0D0E]/80 backdrop-blur-md text-[#4ADE80] font-mono-num text-[10px] font-bold">
                  {event.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-serif-heading font-bold text-base text-[#F5F2EB]">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#9EB0A1] line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C261E] space-y-1 text-[11px] font-mono-num text-[#8E9E91]">
                  <div className="flex items-center gap-1.5 text-[#F5F2EB]">
                    <Calendar className="w-3.5 h-3.5 text-[#4ADE80]" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C87A4B]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="text-[#86EFAC] pt-1">
                    👥 {event.attendeesCount} Community Members Registered
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer & Support CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172E1E] to-[#121D15] border border-[#2F4D37] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <h3 className="font-serif-heading font-black text-2xl text-[#F5F2EB]">
            Want to Volunteer or Sponsor an Event?
          </h3>
          <p className="text-xs sm:text-sm text-[#A3B3A6] max-w-xl">
            We are always looking for volunteers, peer circle facilitators, and community partners to expand our reach.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 rounded-xl bg-[#C87A4B] text-[#0C0D0E] font-bold text-xs uppercase tracking-widest hover:bg-[#D98A5B] transition-all shrink-0 copper-glow"
        >
          Get Involved Today
        </button>
      </div>
    </div>
  );
};
