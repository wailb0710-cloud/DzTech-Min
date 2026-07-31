import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Filter, 
  ChevronRight,
  BookOpen,
  Heart,
  Sparkles,
  MessageSquare,
  ChevronDown,
  Building2,
  Star,
  Video,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Type,
  Scale,
  MapPin,
  CheckCircle2,
  X,
  Wrench,
  Bot
} from 'lucide-react';
import { Specialization } from './types';
import PromoCreator from './components/PromoCreator';
import VocationalGuidance from './components/VocationalGuidance';
import AIChatModal from './components/AIChatModal';

const INITIAL_DATA: Specialization[] = [
  {
    id: '1',
    name: 'Ø§Ù„Ø·Ø¨ Ø§Ù„Ø¹Ø§Ù…',
    minGrade: 16.5,
    jobs: ['Ù…Ø³ØªØ´ÙÙŠØ§Øª Ø­ÙƒÙˆÙ…ÙŠØ©', 'Ø¹ÙŠØ§Ø¯Ø§Øª Ø®Ø§ØµØ©', 'Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ø¹Ù„Ù…ÙŠ'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø´Ø§Ù…Ù„Ø© Ù„Ø¬Ø³Ù… Ø§Ù„Ø¥Ù†Ø³Ø§Ù† ÙˆØ§Ù„Ø£Ù…Ø±Ø§Ø¶ ÙˆØ·Ø±Ù‚ Ø¹Ù„Ø§Ø¬Ù‡Ø§.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø·Ø¨ÙŠØ©',
    streams: ['Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 9
  },
  {
    id: '2',
    name: 'Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø¥Ø¹Ù„Ø§Ù… Ø§Ù„Ø¢Ù„ÙŠ',
    minGrade: 15.0,
    jobs: ['Ø³ÙˆÙ†Ø§Ø·Ø±Ø§Ùƒ', 'Ø¬Ø§Ø²ÙŠ', 'Ø£ÙˆØ±ÙŠØ¯Ùˆ', 'Ù…ÙˆØ¨ÙŠÙ„ÙŠØ³', 'Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª', 'Ø§Ù„Ø¨Ù†ÙˆÙƒ'],
    description: 'ØªØ®ØµØµ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§ØªØŒ Ø§Ù„Ø´Ø¨ÙƒØ§ØªØŒ ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.',
    category: 'Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§',
    streams: ['Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©'],
    marketDemand: 10
  },
  {
    id: '3',
    name: 'Ø§Ù„Ø­Ù‚ÙˆÙ‚ ÙˆØ§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©',
    minGrade: 12.0,
    jobs: ['Ø§Ù„Ù…Ø­Ø§Ù…Ø§Ø©', 'Ø§Ù„Ù‚Ø¶Ø§Ø¡', 'Ø§Ù„Ø¥Ø¯Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ù…ÙˆÙ…ÙŠØ©', 'Ø§Ù„Ø´Ø±ÙƒØ§Øª'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ù‚ÙˆØ§Ù†ÙŠÙ† ÙˆØ§Ù„ØªØ´Ø±ÙŠØ¹Ø§Øª ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‚Ø¶Ø§Ø¦ÙŠØ©.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø¥Ù†Ø³Ø§Ù†ÙŠØ©',
    streams: ['Ø¢Ø¯Ø§Ø¨ ÙˆÙÙ„Ø³ÙØ©', 'Ù„ØºØ§Øª Ø£Ø¬Ù†Ø¨ÙŠØ©', 'ØªØ³ÙŠÙŠØ± ÙˆØ§Ù‚ØªØµØ§Ø¯'],
    marketDemand: 6
  },
  {
    id: '4',
    name: 'Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø¨ØªØ±ÙˆÙ„',
    minGrade: 15.5,
    jobs: ['Ø³ÙˆÙ†Ø§Ø·Ø±Ø§Ùƒ', 'Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©', 'Ù…Ø±Ø§ÙƒØ² Ø§Ù„Ø¨Ø­Ø«'],
    description: 'ØªØ®ØµØµ ØªÙ‚Ù†ÙŠ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ø³ØªØ®Ø±Ø§Ø¬ ÙˆØªÙƒØ±ÙŠØ± Ø§Ù„Ù†ÙØ· ÙˆØ§Ù„ØºØ§Ø².',
    category: 'Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©',
    streams: ['Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©'],
    marketDemand: 9
  },
  {
    id: '5',
    name: 'Ø¹Ù„ÙˆÙ… Ø§Ù„Ø·ÙŠØ±Ø§Ù†',
    minGrade: 16.0,
    jobs: ['Ø§Ù„Ø®Ø·ÙˆØ· Ø§Ù„Ø¬ÙˆÙŠØ© Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±ÙŠØ©', 'Ø§Ù„Ù…Ø·Ø§Ø±Ø§Øª', 'Ø§Ù„Ù‚ÙˆØ§Øª Ø§Ù„Ø¬ÙˆÙŠØ©'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ù…ÙŠÙƒØ§Ù†ÙŠÙƒØ§ Ø§Ù„Ø·ÙŠØ±Ø§Ù† ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ù„Ø§Ø­Ø© Ø§Ù„Ø¬ÙˆÙŠØ©.',
    category: 'Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©',
    streams: ['Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 8
  },
  {
    id: '6',
    name: 'Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©',
    minGrade: 11.5,
    jobs: ['Ø§Ù„ØªØ¹Ù„ÙŠÙ…', 'Ø§Ù„ØªØ±Ø¬Ù…Ø©', 'Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø£Ø¬Ù†Ø¨ÙŠØ©', 'ÙƒÙˆÙ†Ø¯ÙˆØ±'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ù„ØºØ© ÙˆØ§Ù„Ø£Ø¯Ø¨ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ø§Ù„ØªÙˆØ§ØµÙ„.',
    category: 'Ø§Ù„Ù„ØºØ§Øª',
    streams: ['Ù„ØºØ§Øª Ø£Ø¬Ù†Ø¨ÙŠØ©', 'Ø¢Ø¯Ø§Ø¨ ÙˆÙÙ„Ø³ÙØ©', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©'],
    marketDemand: 7
  },
  {
    id: '7',
    name: 'Ø§Ù„Ù…Ø­Ø§Ø³Ø¨Ø© ÙˆØ§Ù„Ù…Ø§Ù„ÙŠØ©',
    minGrade: 13.0,
    jobs: ['Ø§Ù„Ø¨Ù†ÙˆÙƒ', 'Ø³ÙˆÙ†Ø§Ø·Ø±Ø§Ùƒ', 'Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠØ©', 'ØªÙˆØ³ÙŠØ§ÙƒÙŠ'],
    description: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ù…ÙˆØ§Ù„ØŒ Ø§Ù„ØªØ¯Ù‚ÙŠÙ‚ Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØŒ ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ù…Ø§Ù„ÙŠ.',
    category: 'Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯',
    streams: ['ØªØ³ÙŠÙŠØ± ÙˆØ§Ù‚ØªØµØ§Ø¯', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©'],
    marketDemand: 8
  },
  {
    id: '8',
    name: 'Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©',
    minGrade: 14.5,
    jobs: ['Ù…ÙƒØ§ØªØ¨ Ø§Ù„Ø¯Ø±Ø§Ø³Ø§Øª', 'Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ù‚Ø§ÙˆÙ„Ø§Øª', 'Ø§Ù„ÙˆØ²Ø§Ø±Ø§Øª'],
    description: 'ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…Ø¨Ø§Ù†ÙŠ ÙˆØ§Ù„Ù…Ù†Ø´Ø¢Øª Ø§Ù„Ø¹Ù…Ø±Ø§Ù†ÙŠØ© Ø¨Ù„Ù…Ø³Ø© Ø¬Ù…Ø§Ù„ÙŠØ© ÙˆØªÙ‚Ù†ÙŠØ©.',
    category: 'Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©',
    streams: ['Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©'],
    marketDemand: 7
  },
  {
    id: '9',
    name: 'Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ',
    minGrade: 17.0,
    jobs: ['Ù…Ø±Ø§ÙƒØ² Ø§Ù„Ø¨Ø­Ø«', 'Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù†Ø§Ø´Ø¦Ø©', 'Ø³ÙˆÙ†Ø§Ø·Ø±Ø§Ùƒ'],
    description: 'ØªØ®ØµØµ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ Ù„ØªØ·ÙˆÙŠØ± Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒÙŠØ© ØªØ­Ø§ÙƒÙŠ Ø§Ù„Ø¹Ù‚Ù„ Ø§Ù„Ø¨Ø´Ø±ÙŠ.',
    category: 'Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§',
    streams: ['Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 10
  },
  {
    id: '10',
    name: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø¥Ù†Ø³Ø§Ù†ÙŠØ© ÙˆØ§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©',
    minGrade: 10.0,
    jobs: ['Ø§Ù„ØªØ¹Ù„ÙŠÙ…', 'Ø§Ù„Ø¥Ø¹Ù„Ø§Ù…', 'Ø§Ù„Ø¥Ø¯Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ù…ÙˆÙ…ÙŠØ©', 'Ù…Ø±Ø§ÙƒØ² Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ØŒ Ø§Ù„Ø³Ù„ÙˆÙƒ Ø§Ù„Ø¨Ø´Ø±ÙŠØŒ ÙˆØ§Ù„ØªØ§Ø±ÙŠØ®.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø¥Ù†Ø³Ø§Ù†ÙŠØ©',
    streams: ['Ø¢Ø¯Ø§Ø¨ ÙˆÙÙ„Ø³ÙØ©', 'Ù„ØºØ§Øª Ø£Ø¬Ù†Ø¨ÙŠØ©', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'ØªØ³ÙŠÙŠØ± ÙˆØ§Ù‚ØªØµØ§Ø¯'],
    marketDemand: 5
  },
  {
    id: '11',
    name: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„ÙÙ„Ø§Ø­ÙŠØ©',
    minGrade: 10.5,
    jobs: ['Ø§Ù„Ù…Ø²Ø§Ø±Ø¹ Ø§Ù„ÙƒØ¨Ø±Ù‰', 'ÙˆØ²Ø§Ø±Ø© Ø§Ù„ÙÙ„Ø§Ø­Ø©', 'Ø´Ø±ÙƒØ§Øª Ø§Ù„ØµÙ†Ø§Ø¹Ø§Øª Ø§Ù„ØºØ°Ø§Ø¦ÙŠØ©'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø²Ø±Ø§Ø¹ÙŠØ© Ø§Ù„Ø­Ø¯ÙŠØ«Ø© ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ø¥Ù†ØªØ§Ø¬ Ø§Ù„ØºØ°Ø§Ø¦ÙŠ.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©',
    streams: ['Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 7
  },
  {
    id: '12',
    name: 'Ø§Ù„Ø£Ø¯Ø¨ Ø§Ù„Ø¹Ø±Ø¨ÙŠ',
    minGrade: 10.0,
    jobs: ['Ø§Ù„ØªØ¹Ù„ÙŠÙ…', 'Ø§Ù„ØµØ­Ø§ÙØ©', 'Ø§Ù„ØªØ¯Ù‚ÙŠÙ‚ Ø§Ù„Ù„ØºÙˆÙŠ', 'Ø¯ÙˆØ± Ø§Ù„Ù†Ø´Ø±'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©ØŒ Ø§Ù„Ø¨Ù„Ø§ØºØ©ØŒ ÙˆØ§Ù„Ø£Ø¯Ø¨ Ø§Ù„Ø¹Ø±Ø¨ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ø¹ØµÙˆØ±.',
    category: 'Ø§Ù„Ù„ØºØ§Øª',
    streams: ['Ø¢Ø¯Ø§Ø¨ ÙˆÙÙ„Ø³ÙØ©', 'Ù„ØºØ§Øª Ø£Ø¬Ù†Ø¨ÙŠØ©'],
    marketDemand: 4
  },
  {
    id: '13',
    name: 'Ø¹Ù„ÙˆÙ… Ø§Ù„Ø£Ø±Ø¶ ÙˆØ§Ù„ÙƒÙˆÙ†',
    minGrade: 10.5,
    jobs: ['Ø³ÙˆÙ†Ø§Ø·Ø±Ø§Ùƒ', 'Ù…Ø±Ø§ÙƒØ² Ø§Ù„Ø£Ø±ØµØ§Ø¯ Ø§Ù„Ø¬ÙˆÙŠØ©', 'Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù…Ù†Ø§Ø¬Ù…'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„Ø¬ÙŠÙˆÙ„ÙˆØ¬ÙŠØ§ØŒ Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©ØŒ ÙˆØ§Ù„Ø¸ÙˆØ§Ù‡Ø± Ø§Ù„Ø£Ø±Ø¶ÙŠØ©.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©',
    streams: ['Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 6
  },
  {
    id: '14',
    name: 'Ø§Ù„ØªØ±Ø¨ÙŠØ© Ø§Ù„Ø¨Ø¯Ù†ÙŠØ© ÙˆØ§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© (STAPS)',
    minGrade: 12.0,
    jobs: ['Ø§Ù„ØªØ¹Ù„ÙŠÙ…', 'Ø§Ù„Ø£Ù†Ø¯ÙŠØ© Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©', 'Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ø´Ø®ØµÙŠ'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø¹Ù„ÙˆÙ… Ø§Ù„Ø±ÙŠØ§Ø¶Ø©ØŒ Ø§Ù„ØªØ¯Ø±ÙŠØ¨ØŒ ÙˆØ§Ù„ØªØ±Ø¨ÙŠØ© Ø§Ù„Ø¨Ø¯Ù†ÙŠØ©.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø¥Ù†Ø³Ø§Ù†ÙŠØ©',
    streams: ['Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø´Ø¹Ø¨'],
    marketDemand: 5
  },
  {
    id: '15',
    name: 'Ø¹Ù„ÙˆÙ… Ø§Ù„Ù…Ø§Ø¯Ø©',
    minGrade: 11.0,
    jobs: ['Ø§Ù„Ù…Ø®ØªØ¨Ø±Ø§Øª Ø§Ù„ÙƒÙŠÙ…ÙŠØ§Ø¦ÙŠØ©', 'Ø§Ù„ØµÙ†Ø§Ø¹Ø§Øª Ø§Ù„ØªØ­ÙˆÙŠÙ„ÙŠØ©', 'Ø§Ù„ØªØ¹Ù„ÙŠÙ…'],
    description: 'Ø¯Ø±Ø§Ø³Ø© Ø§Ù„ÙÙŠØ²ÙŠØ§Ø¡ ÙˆØ§Ù„ÙƒÙŠÙ…ÙŠØ§Ø¡ ÙˆØ®ØµØ§Ø¦Øµ Ø§Ù„Ù…Ø§Ø¯Ø©.',
    category: 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©',
    streams: ['Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ'],
    marketDemand: 6
  }
];

export default function App() {
  const [mainSection, setMainSection] = useState<'university' | 'vocational'>('university');
  const [view, setView] = useState<'home' | 'favorites' | 'promo'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userGrade, setUserGrade] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Ø§Ù„ÙƒÙ„');
  const [selectedStream, setSelectedStream] = useState<string>('Ø§Ù„ÙƒÙ„');
  const [showAllRegardlessOfGrade, setShowAllRegardlessOfGrade] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [showAIChatModal, setShowAIChatModal] = useState(false);
  const [aiChatEduLevel, setAiChatEduLevel] = useState<string | undefined>(undefined);

  // Ù…ÙŠØ²Ø§Øª Ø§Ù„ØªÙƒØ¨ÙŠØ± ÙˆØ§Ù„Ù…Ù‚Ø§Ø±Ù†Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©
  const [zoomLevel, setZoomLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [zoomedSpec, setZoomedSpec] = useState<Specialization | null>(null);
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const toggleComparison = (id: string) => {
    setComparisonList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const getUniversitiesForCategory = (category: string) => {
    switch(category) {
      case 'Ø§Ù„Ø¹Ù„ÙˆÙ… Ø§Ù„Ø·Ø¨ÙŠØ©':
        return ['Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¬Ø²Ø§Ø¦Ø± 1 (Ø¨Ù† ÙŠÙˆØ³Ù Ø¨Ù† Ø®Ø¯Ø©)', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆÙ‡Ø±Ø§Ù† 1 (Ø£Ø­Ù…Ø¯ Ø¨Ù† Ø¨Ù„Ø©)', 'Ø¬Ø§Ù…Ø¹Ø© Ù‚Ø³Ù†Ø·ÙŠÙ†Ø© 3', 'Ø¬Ø§Ù…Ø¹Ø© Ø¹Ù†Ø§Ø¨Ø©', 'Ø¬Ø§Ù…Ø¹Ø© Ø³Ø·ÙŠÙ 1', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆØ±Ù‚Ù„Ø©'];
      case 'Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§':
        return ['Ø§Ù„Ù…Ø¯Ø±Ø³Ø© Ø§Ù„ÙˆØ·Ù†ÙŠØ© Ø§Ù„Ø¹Ù„ÙŠØ§ Ù„Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ (Ø³ÙŠØ¯ÙŠ Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡)', 'Ø§Ù„Ù…Ø¯Ø±Ø³Ø© Ø§Ù„ÙˆØ·Ù†ÙŠØ© Ø§Ù„Ø¹Ù„ÙŠØ§ Ù„Ù„Ø¥Ø¹Ù„Ø§Ù… Ø§Ù„Ø¢Ù„ÙŠ (ESI)', 'Ø¬Ø§Ù…Ø¹Ø© Ù‡ÙˆØ§Ø±ÙŠ Ø¨ÙˆÙ…Ø¯ÙŠÙ† (USTHB)', 'Ø¬Ø§Ù…Ø¹Ø© Ù‚Ø³Ù†Ø·ÙŠÙ†Ø© 2'];
      case 'Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©':
        return ['Ø§Ù„Ù…Ø¯Ø±Ø³Ø© Ø§Ù„ÙˆØ·Ù†ÙŠØ© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª (Polytechnique)', 'Ø¬Ø§Ù…Ø¹Ø© Ø¨ÙˆÙ…Ø±Ø¯Ø§Ø³ (M\'Hamed Bougara)', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆÙ‡Ø±Ø§Ù† Ù„Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ (USTO)'];
      case 'Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯':
        return ['Ø§Ù„Ù…Ø¯Ø±Ø³Ø© Ø§Ù„Ø¹Ù„ÙŠØ§ Ù„Ù„ØªØ¬Ø§Ø±Ø© (ESC Ø§Ù„Ù‚Ù„ÙŠØ¹Ø©)', 'Ø§Ù„Ù…Ø¯Ø±Ø³Ø© Ø§Ù„ÙˆØ·Ù†ÙŠØ© Ø§Ù„Ø¹Ù„ÙŠØ§ Ù„Ù„Ù…ØµØ±ÙÙŠØ©', 'Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¬Ø²Ø§Ø¦Ø± 3 (Ø¯Ø§Ù„ÙŠ Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ…)', 'Ø¬Ø§Ù…Ø¹Ø© Ø³Ø·ÙŠÙ 1'];
      case 'Ø§Ù„Ù„ØºØ§Øª':
        return ['Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¬Ø²Ø§Ø¦Ø± 2 (Ø¨ÙˆØ²Ø±ÙŠØ¹Ø©)', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆÙ‡Ø±Ø§Ù† 2', 'Ø¬Ø§Ù…Ø¹Ø© Ù‚Ø³Ù†Ø·ÙŠÙ†Ø© 1', 'Ø¬Ø§Ù…Ø¹Ø© Ø¨Ø§ØªÙ†Ø© 1'];
      default:
        return ['Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¬Ø²Ø§Ø¦Ø± Ø§Ù„Ø¹Ø§ØµÙ…Ø©', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆÙ‡Ø±Ø§Ù†', 'Ø¬Ø§Ù…Ø¹Ø© Ù‚Ø³Ù†Ø·ÙŠÙ†Ø©', 'Ø¬Ø§Ù…Ø¹Ø© Ø³Ø·ÙŠÙ', 'Ø¬Ø§Ù…Ø¹Ø© Ø¹Ù†Ø§Ø¨Ø©', 'Ø¬Ø§Ù…Ø¹Ø© ØªÙ„Ù…Ø³Ø§Ù†', 'Ø¬Ø§Ù…Ø¹Ø© ÙˆØ±Ù‚Ù„Ø©'];
    }
  };

  const categories = ['Ø§Ù„ÙƒÙ„', ...new Set(INITIAL_DATA.map(s => s.category))];
  const streams = ['Ø§Ù„ÙƒÙ„', 'Ø¹Ù„ÙˆÙ… ØªØ¬Ø±ÙŠØ¨ÙŠØ©', 'Ø±ÙŠØ§Ø¶ÙŠØ§Øª', 'ØªÙ‚Ù†ÙŠ Ø±ÙŠØ§Ø¶ÙŠ', 'Ø¢Ø¯Ø§Ø¨ ÙˆÙÙ„Ø³ÙØ©', 'Ù„ØºØ§Øª Ø£Ø¬Ù†Ø¨ÙŠØ©', 'ØªØ³ÙŠÙŠØ± ÙˆØ§Ù‚ØªØµØ§Ø¯'];

  // ØªØ­Ø³ÙŠÙ† ØªØ·Ø¨ÙŠØ¹ Ø§Ù„Ù†Øµ Ø§Ù„Ø¹Ø±Ø¨ÙŠ Ù„Ù„Ø¨Ø­Ø« Ø¨Ø´ÙƒÙ„ Ø£ÙƒØ«Ø± Ø´Ù…ÙˆÙ„Ø§Ù‹
  const normalizeArabic = (text: string | undefined | null) => {
    if (!text) return '';
    return text
      .toString()
      .replace(/[Ø£Ø¥Ø¢]/g, 'Ø§')
      .replace(/Ø©/g, 'Ù‡')
      .replace(/Ù‰/g, 'ÙŠ')
      .replace(/Ù€/g, '') // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªØ·ÙˆÙŠÙ„
      .replace(/[\u064B-\u0652]/g, '') // Ø¥Ø²Ø§Ù„Ø© Ø§Ù„ØªØ´ÙƒÙŠÙ„ (Ø§Ù„ÙØªØ­Ø©ØŒ Ø§Ù„Ø¶Ù…Ø©ØŒ Ø¥Ù„Ø®)
      .replace(/\s+/g, ' ') // ØªÙˆØ­ÙŠØ¯ Ø§Ù„Ù…Ø³Ø§ÙØ§Øª
      .trim()
      .toLowerCase();
  };

  const filteredSpecializations = useMemo(() => {
    try {
      const normalizedQuery = normalizeArabic(searchQuery);
      const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);
      const gradeValue = userGrade.replace(',', '.');
      const normalizedGrade = gradeValue === '' ? '' : Number(gradeValue);
      
      let baseData = INITIAL_DATA;
      if (view === 'favorites') {
        baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
      }

      return baseData
        .filter(spec => {
          // 1. Ø´Ø±Ø· Ø§Ù„Ø¨Ø­Ø« Ø§Ù„Ù†ØµÙŠ
          const specName = normalizeArabic(spec.name);
          const specJobs = spec.jobs.map(j => normalizeArabic(j)).join(' ');
          const specDesc = normalizeArabic(spec.description);
          const specCat = normalizeArabic(spec.category);
          
          const fullContent = `${specName} ${specJobs} ${specDesc} ${specCat}`;
          const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
          
          // 2. Ø´Ø±Ø· Ø§Ù„Ù…Ø¹Ø¯Ù„
          const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
          
          // 3. Ø´Ø±Ø· Ø§Ù„ØªØµÙ†ÙŠÙ
          const matchesCategory = selectedCategory === 'Ø§Ù„ÙƒÙ„' || spec.category === selectedCategory;

          // 4. Ø´Ø±Ø· Ø§Ù„Ø´Ø¹Ø¨Ø©
          const matchesStream = selectedStream === 'Ø§Ù„ÙƒÙ„' || spec.streams.includes(selectedStream);
          
          return matchesSearch && matchesGrade && matchesCategory && matchesStream;
        })
        .sort((a, b) => b.marketDemand - a.marketDemand);
    } catch (error) {
      console.error("Search filtering error:", error);
      return INITIAL_DATA;
    }
  }, [view, favorites, searchQuery, userGrade, selectedCategory, selectedStream, showAllRegardlessOfGrade]);

  const handleGradeChange = (val: string) => {
    // Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨Ø§Ù„Ø£Ø±Ù‚Ø§Ù…ØŒ Ø§Ù„Ù†Ù‚Ø·Ø©ØŒ ÙˆØ§Ù„ÙØ§ØµÙ„Ø© ÙÙ‚Ø·
    const sanitized = val.replace(/[^0-9.,]/g, '');
    setUserGrade(sanitized);
  };

  const resultsWithoutGradeFilter = useMemo(() => {
    const normalizedQuery = normalizeArabic(searchQuery);
    const queryWords = normalizedQuery.split(' ').filter(w => w.length > 0);
    
    let baseData = INITIAL_DATA;
    if (view === 'favorites') {
      baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
    }

    return baseData.filter(spec => {
      const fullContent = `${normalizeArabic(spec.name)} ${spec.jobs.map(j => normalizeArabic(j)).join(' ')} ${normalizeArabic(spec.description)} ${normalizeArabic(spec.category)}`;
      const matchesSearch = queryWords.length === 0 || queryWords.every(word => fullContent.includes(word));
      const matchesCategory = selectedCategory === 'Ø§Ù„ÙƒÙ„' || spec.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [view, favorites, searchQuery, selectedCategory]);

  const resultsWithoutSearchFilter = useMemo(() => {
    const gradeValue = userGrade.replace(',', '.');
    const normalizedGrade = gradeValue === '' ? '' : Number(gradeValue);

    let baseData = INITIAL_DATA;
    if (view === 'favorites') {
      baseData = INITIAL_DATA.filter(spec => favorites.includes(spec.id));
    }

    return baseData.filter(spec => {
      const matchesGrade = showAllRegardlessOfGrade || normalizedGrade === '' || normalizedGrade >= spec.minGrade;
      const matchesCategory = selectedCategory === 'Ø§Ù„ÙƒÙ„' || spec.category === selectedCategory;
      return matchesGrade && matchesCategory;
    });
  }, [view, favorites, userGrade, selectedCategory, showAllRegardlessOfGrade]);

  const isGradeTheBottleneck = filteredSpecializations.length === 0 && resultsWithoutGradeFilter.length > 0;
  const isSearchTheBottleneck = filteredSpecializations.length === 0 && resultsWithoutSearchFilter.length > 0;

  const isEligible = (minGrade: number) => {
    if (userGrade === '') return true;
    const gradeValue = userGrade.replace(',', '.');
    return Number(gradeValue) >= minGrade;
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const getAdvisorAdvice = () => {
    if (userGrade === '') return "ÙŠØ§ Ø®ÙˆÙŠØ§/Ø®ØªÙŠØŒ Ø¯Ø®Ù„ Ø§Ù„Ù…Ø¹Ø¯Ù„ ØªØ§Ø¹Ùƒ Ø¨Ø§Ø´ Ù†Ù‚Ø¯Ø± Ù†Ø¹Ø§ÙˆÙ†Ùƒ!";
    const gradeValue = userGrade.replace(',', '.');
    const grade = Number(gradeValue);
    if (isNaN(grade)) return "ÙŠØ§ Ø®ÙˆÙŠØ§/Ø®ØªÙŠØŒ Ø¯Ø®Ù„ Ù…Ø¹Ø¯Ù„ ØµØ­ÙŠØ­ (Ù…Ø«Ø§Ù„: 14.50)";

    // Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø£ÙØ¶Ù„ ØªØ®ØµØµ Ù…Ù† Ø­ÙŠØ« Ø§Ù„Ø·Ù„Ø¨ ÙÙŠ Ø³ÙˆÙ‚ Ø§Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ù…Ø¹Ø¯Ù„
    const eligibleSpecs = INITIAL_DATA.filter(s => grade >= s.minGrade)
      .sort((a, b) => b.marketDemand - a.marketDemand);

    const eligibleInCat = eligibleSpecs.filter(s => 
      selectedCategory === 'Ø§Ù„ÙƒÙ„' || s.category === selectedCategory
    );

    const topSpec = eligibleInCat[0] || eligibleSpecs[0];
    
    let advice = "";
    
    if (grade >= 16) {
      advice = `ØªØ¨Ø§Ø±Ùƒ Ø§Ù„Ù„Ù‡! Ø¨Ù…Ø¹Ø¯Ù„ ${userGrade} Ø¹Ù†Ø¯Ùƒ Ø®ÙŠØ§Ø±Ø§Øª Ù‚ÙˆÙŠØ© Ø¨Ø²Ø§Ù. `;
    } else if (grade >= 14) {
      advice = `Ù…Ø¹Ø¯Ù„ ${userGrade} Ø¨Ø²Ø§Ù Ù‡Ø§ÙŠÙ„ØŒ ÙŠÙØªØ­Ù„Ùƒ Ø¨ÙŠØ¨Ø§Ù† Ù„ØªØ®ØµØµØ§Øª Ù…Ù…ØªØ§Ø²Ø©. `;
    } else if (grade >= 12) {
      advice = `Ù…Ø¹Ø¯Ù„ ${userGrade} Ù…Ù„ÙŠØ­ØŒ ØªÙ‚Ø¯Ø± Ø¯ÙŠØ± Ø¨ÙŠÙ‡ ØªØ®ØµØµØ§Øª Ø¹Ù†Ø¯Ù‡Ø§ Ù…Ø³ØªÙ‚Ø¨Ù„ ÙˆØ§Ø¹Ø¯. `;
    } else if (grade >= 10) {
      advice = `Ù…Ø¨Ø±ÙˆÙƒ Ø¹Ù„ÙŠÙƒ Ø§Ù„Ø¨Ø§Ùƒ! Ø¨Ù…Ø¹Ø¯Ù„ ${userGrade} ÙƒØ§ÙŠÙ† ØªØ®ØµØµØ§Øª Ù…Ù„Ø§Ø­ ØªÙ‚Ø¯Ø± ØªÙ†Ø¬Ø­ ÙÙŠÙ‡Ù… ÙˆØªØ·ÙˆØ± Ø±ÙˆØ­Ùƒ. `;
    } else {
      advice = "Ù…Ø§ ØªÙØ´Ù„Ø´ØŒ Ø§Ù„ØµØ­ ÙÙŠ Ø§Ù„Ø¥Ø±Ø§Ø¯Ø© ÙˆØ§Ù„Ø®Ø¯Ù…Ø©ØŒ ÙƒØ§ÙŠÙ† ØªØ®ØµØµØ§Øª Ø¨Ø²Ø§Ù ØªÙ‚Ø¯Ø± ØªØ¨Ø¯Ø¹ ÙÙŠÙ‡Ù…. ";
    }

    if (topSpec) {
      if (selectedCategory !== 'Ø§Ù„ÙƒÙ„' && topSpec.category === selectedCategory) {
        advice += `Ø¨Ù…Ø§ Ø£Ù†Ùƒ Ù…Ù‡ØªÙ… Ø¨Ù€ ${selectedCategory}ØŒ Ù†Ù†ØµØ­Ùƒ Ø¨Ù€ "${topSpec.name}" Ø±Ø§Ù‡Ùˆ Ù…Ø·Ù„ÙˆØ¨ Ø¨Ø²Ø§Ù (Ø§Ù„Ø·Ù„Ø¨: ${topSpec.marketDemand}/10). `;
      } else {
        advice += `Ù†Ù†ØµØ­Ùƒ ØªØ´ÙˆÙ "${topSpec.name}"ØŒ Ø±Ø§Ù‡Ùˆ ØªØ®ØµØµ Ù…Ø·Ù„ÙˆØ¨ Ø¨Ø²Ø§Ù ÙÙŠ Ø³ÙˆÙ‚ Ø§Ù„Ø¹Ù…Ù„ Ø­Ø§Ù„ÙŠØ§Ù‹. `;
      }
    }

    if (favorites.length > 0) {
      advice += `Ø±Ø§Ùƒ Ø­ÙØ¸Øª ${favorites.length} ØªØ®ØµØµØ§Øª ÙÙŠ Ø§Ù„Ù…ÙØ¶Ù„Ø©ØŒ Ø±ÙƒØ² Ø¹Ù„ÙŠÙ‡Ù… ÙˆØ´ÙˆÙ Ø§Ù„Ù„ÙŠ ÙŠØ®Ø±Ø¬ Ø¹Ù„Ù‰ Ø·Ù…ÙˆØ­Ùƒ!`;
    } else {
      advice += "Ù…Ø§ ØªÙ†Ø³Ø§Ø´ ØªØ¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ù„Ø¨ â¤ï¸ Ø¨Ø§Ø´ ØªØ­ÙØ¸ Ø§Ù„ØªØ®ØµØµØ§Øª Ø§Ù„Ù„ÙŠ Ø¹Ø¬Ø¨ÙˆÙƒ.";
    }

    return advice;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      {/* Hero Section */}
      <header className="bg-[#004d00] text-white pt-8 pb-12 px-4 shadow-lg">
        {/* Top Dual Section Toggle Buttons */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg p-2 rounded-3xl border border-white/20 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto shadow-2xl">
            <button
              onClick={() => setMainSection('university')}
              className={`flex-1 py-3.5 px-6 rounded-2xl font-black text-sm md:text-base transition-all flex items-center justify-center gap-2.5 ${
                mainSection === 'university'
                  ? 'bg-white text-[#004d00] shadow-xl scale-[1.02]'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Ø§Ù„ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ø¬Ø§Ù…Ø¹ÙŠ ðŸŽ“
            </button>

            <button
              onClick={() => setMainSection('vocational')}
              className={`flex-1 py-3.5 px-6 rounded-2xl font-black text-sm md:text-base transition-all flex items-center justify-center gap-2.5 ${
                mainSection === 'vocational'
                  ? 'bg-emerald-400 text-slate-950 shadow-xl scale-[1.02]'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Wrench className="w-5 h-5" />
              Ø§Ù„ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ù…Ù‡Ù†ÙŠ ÙˆØ§Ù„Ù…Ù‡Ø§Ø±Ø§Øª ðŸ› ï¸
            </button>
          </div>
        </div>

        {mainSection === 'university' && (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-center md:text-right"
  >
    <div></div> className="flex items-center justify-center md:justify-start gap-3 mb-6">
      {/* محتوى القسم هنا */}
    </div>
  </motion.div>
)}
